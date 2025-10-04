import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Select from 'react-select';
import PropTypes from 'prop-types';

// Helper function to format numbers in Indian numbering system
const formatIndianCurrency = (num) => {
  if (!num) return '₹0';
  const numStr = num.toString();
  const lastThree = numStr.substring(numStr.length - 3);
  const otherNumbers = numStr.substring(0, numStr.length - 3);
  if (otherNumbers !== '') {
    return '₹' + otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree;
  } else {
    return '₹' + lastThree;
  }
};

// Options for ReactSelect dropdowns
const GENDER_OPTIONS = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Other', label: 'Other' }
];

const EDUCATION_OPTIONS = [
  { value: 'Below 8th', label: 'Below 8th' },
  { value: '8th-10th', label: '8th-10th' },
  { value: '12th', label: '12th' },
  { value: 'Graduate', label: 'Graduate' },
  { value: 'Post Graduate', label: 'Post Graduate' }
];

const CATEGORY_OPTIONS = [
  { value: 'General', label: 'General' },
  { value: 'SC', label: 'SC' },
  { value: 'ST', label: 'ST' },
  { value: 'OBC', label: 'OBC' },
  { value: 'Women', label: 'Women' }
];

const BUSINESS_TYPE_OPTIONS = [
  { value: 'Manufacturing', label: 'Manufacturing' },
  { value: 'Trading', label: 'Trading' },
  { value: 'Service', label: 'Service' }
];

const BUSINESS_REGISTRATION_OPTIONS = [
  { value: 'MSME', label: 'MSME' },
  { value: 'Company', label: 'Company' },
  { value: 'LLP', label: 'LLP' },
  { value: 'Partnership', label: 'Partnership' },
  { value: 'None', label: 'None' }
];

const YES_NO_OPTIONS = [
  { value: 'true', label: 'Yes' },
  { value: 'false', label: 'No' }
];

const EligibilityChecker = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    // Personal Information
    age: '',
    gender: '',
    education: '',
    familyIncome: '',
    category: '', // General, SC, ST, OBC, Women
    
    // Business Information
    businessType: '', // Manufacturing, Trading, Service
    businessExperience: '',
    currentBusiness: false,
    businessRegistration: '',
    annualTurnover: '',
    
    // Financial Information
    creditScore: '',
    existingLoans: false,
    collateral: false,
    projectCost: '',
    
    // Additional Information
    innovation: false,
    technology: false,
    export: false,
    employment: '',
    location: ''
  });

  const [eligibilityResults, setEligibilityResults] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const checkEligibility = () => {
    setIsChecking(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const results = calculateEligibility(formData);
      setEligibilityResults(results);
      setIsChecking(false);
    }, 2000);
  };

  const calculateEligibility = (data) => {
    const schemes = {
      'PMEGP Loan': {
        eligible: false,
        amount: 0,
        reasons: [],
        requirements: []
      },
      'MUDRA Loan': {
        eligible: false,
        amount: 0,
        reasons: [],
        requirements: []
      },
      'Startup India Seed Fund': {
        eligible: false,
        amount: 0,
        reasons: [],
        requirements: []
      },
      'NAIFF Scheme': {
        eligible: false,
        amount: 0,
        reasons: [],
        requirements: []
      },
      'Government Grants': {
        eligible: false,
        amount: 0,
        reasons: [],
        requirements: []
      },
      'Venture Capital': {
        eligible: false,
        amount: 0,
        reasons: [],
        requirements: []
      }
    };

    // PMEGP Loan Eligibility
    if (data.age >= 18 && data.age <= 40 && 
        data.familyIncome <= 150000 && 
        data.education !== 'Below 8th' &&
        !data.currentBusiness) {
      schemes['PMEGP Loan'].eligible = true;
      schemes['PMEGP Loan'].amount = Math.min(parseInt(data.projectCost) * 0.35, 2500000);
      schemes['PMEGP Loan'].reasons.push('Meets age, income, and education criteria');
      schemes['PMEGP Loan'].requirements.push('Complete project report', 'Training completion', 'Bank account');
    } else {
      if (data.age < 18 || data.age > 40) {
        schemes['PMEGP Loan'].reasons.push('Age must be between 18-40 years');
      }
      if (data.familyIncome > 150000) {
        schemes['PMEGP Loan'].reasons.push('Family income should not exceed ₹1.5 lakh');
      }
      if (data.education === 'Below 8th') {
        schemes['PMEGP Loan'].reasons.push('Minimum 8th standard education required');
      }
      if (data.currentBusiness) {
        schemes['PMEGP Loan'].reasons.push('Should be a first-generation entrepreneur');
      }
    }

    // MUDRA Loan Eligibility
    if (data.age >= 18 && data.age <= 65 && 
        data.businessExperience >= 6 && 
        data.creditScore >= 650) {
      schemes['MUDRA Loan'].eligible = true;
      if (data.annualTurnover < 50000) {
        schemes['MUDRA Loan'].amount = 50000; // Shishu
      } else if (data.annualTurnover < 500000) {
        schemes['MUDRA Loan'].amount = 500000; // Kishor
      } else {
        schemes['MUDRA Loan'].amount = 1000000; // Tarun
      }
      schemes['MUDRA Loan'].reasons.push('Meets age, experience, and credit criteria');
      schemes['MUDRA Loan'].requirements.push('Business registration', 'Bank statements', 'ITR');
    } else {
      if (data.age < 18 || data.age > 65) {
        schemes['MUDRA Loan'].reasons.push('Age must be between 18-65 years');
      }
      if (data.businessExperience < 6) {
        schemes['MUDRA Loan'].reasons.push('Minimum 6 months business experience required');
      }
      if (data.creditScore < 650) {
        schemes['MUDRA Loan'].reasons.push('Good credit history required');
      }
    }

    // Startup India Seed Fund Eligibility
    if (data.age >= 18 && data.age <= 40 && 
        data.innovation && data.technology && 
        data.businessRegistration === 'Company' && 
        data.annualTurnover < 100000000) {
      schemes['Startup India Seed Fund'].eligible = true;
      schemes['Startup India Seed Fund'].amount = Math.min(parseInt(data.projectCost) * 0.5, 10000000);
      schemes['Startup India Seed Fund'].reasons.push('Meets startup and innovation criteria');
      schemes['Startup India Seed Fund'].requirements.push('Startup India registration', 'Innovation certificate', 'Business plan');
    } else {
      if (!data.innovation) {
        schemes['Startup India Seed Fund'].reasons.push('Innovative business idea required');
      }
      if (!data.technology) {
        schemes['Startup India Seed Fund'].reasons.push('Technology-based solution required');
      }
      if (data.businessRegistration !== 'Company') {
        schemes['Startup India Seed Fund'].reasons.push('Company registration required');
      }
      if (data.annualTurnover >= 100000000) {
        schemes['Startup India Seed Fund'].reasons.push('Turnover should not exceed ₹100 crore');
      }
    }

    // NAIFF Scheme Eligibility
    if (data.technology && data.innovation && 
        data.businessExperience >= 12 && 
        data.annualTurnover > 0) {
      schemes['NAIFF Scheme'].eligible = true;
      schemes['NAIFF Scheme'].amount = Math.min(parseInt(data.projectCost) * 0.4, 20000000);
      schemes['NAIFF Scheme'].reasons.push('Meets technology and innovation criteria');
      schemes['NAIFF Scheme'].requirements.push('Technology documentation', 'Business model', 'Financial projections');
    } else {
      if (!data.technology) {
        schemes['NAIFF Scheme'].reasons.push('Technology-based business required');
      }
      if (!data.innovation) {
        schemes['NAIFF Scheme'].reasons.push('Innovation in emerging technologies required');
      }
      if (data.businessExperience < 12) {
        schemes['NAIFF Scheme'].reasons.push('Minimum 1 year of operations required');
      }
    }

    // Government Grants Eligibility
    if (data.businessRegistration === 'MSME' && 
        data.innovation && 
        data.employment >= 5) {
      schemes['Government Grants'].eligible = true;
      schemes['Government Grants'].amount = Math.min(parseInt(data.projectCost) * 0.75, 5000000);
      schemes['Government Grants'].reasons.push('Meets MSME and innovation criteria');
      schemes['Government Grants'].requirements.push('MSME registration', 'Project proposal', 'Innovation certificate');
    } else {
      if (data.businessRegistration !== 'MSME') {
        schemes['Government Grants'].reasons.push('MSME registration required');
      }
      if (!data.innovation) {
        schemes['Government Grants'].reasons.push('Innovation in product/process required');
      }
      if (data.employment < 5) {
        schemes['Government Grants'].reasons.push('Employment generation potential required');
      }
    }

    // Venture Capital Eligibility
    if (data.annualTurnover > 10000000 && 
        data.technology && 
        data.innovation && 
        data.creditScore >= 700) {
      schemes['Venture Capital'].eligible = true;
      schemes['Venture Capital'].amount = Math.min(parseInt(data.projectCost) * 0.3, 50000000);
      schemes['Venture Capital'].reasons.push('Meets high-growth and technology criteria');
      schemes['Venture Capital'].requirements.push('Pitch deck', 'Financial model', 'Market analysis');
    } else {
      if (data.annualTurnover <= 10000000) {
        schemes['Venture Capital'].reasons.push('High revenue potential required');
      }
      if (!data.technology) {
        schemes['Venture Capital'].reasons.push('Technology differentiation required');
      }
      if (data.creditScore < 700) {
        schemes['Venture Capital'].reasons.push('Excellent credit history required');
      }
    }

    return schemes;
  };

  const eligibleSchemes = eligibilityResults ? 
    Object.entries(eligibilityResults).filter(([, scheme]) => scheme.eligible) : [];
  const ineligibleSchemes = eligibilityResults ? 
    Object.entries(eligibilityResults).filter(([, scheme]) => !scheme.eligible) : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Eligibility Checker</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          {!eligibilityResults ? (
            <div className="space-y-6">
              {/* Personal Information */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter your age"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <Select
                      value={GENDER_OPTIONS.find(opt => opt.value === formData.gender)}
                      onChange={(selectedOption) => handleInputChange('gender', selectedOption ? selectedOption.value : '')}
                      options={GENDER_OPTIONS}
                      placeholder="Select Gender"
                      isClearable
                      className="react-select-container"
                      classNamePrefix="react-select"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
                    <Select
                      value={EDUCATION_OPTIONS.find(opt => opt.value === formData.education)}
                      onChange={(selectedOption) => handleInputChange('education', selectedOption ? selectedOption.value : '')}
                      options={EDUCATION_OPTIONS}
                      placeholder="Select Education"
                      isClearable
                      className="react-select-container"
                      classNamePrefix="react-select"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Family Income (₹)</label>
                    <input
                      type="number"
                      value={formData.familyIncome}
                      onChange={(e) => handleInputChange('familyIncome', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Annual family income"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <Select
                      value={CATEGORY_OPTIONS.find(opt => opt.value === formData.category)}
                      onChange={(selectedOption) => handleInputChange('category', selectedOption ? selectedOption.value : '')}
                      options={CATEGORY_OPTIONS}
                      placeholder="Select Category"
                      isClearable
                      className="react-select-container"
                      classNamePrefix="react-select"
                    />
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Business Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                    <Select
                      value={BUSINESS_TYPE_OPTIONS.find(opt => opt.value === formData.businessType)}
                      onChange={(selectedOption) => handleInputChange('businessType', selectedOption ? selectedOption.value : '')}
                      options={BUSINESS_TYPE_OPTIONS}
                      placeholder="Select Business Type"
                      isClearable
                      className="react-select-container"
                      classNamePrefix="react-select"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Experience (months)</label>
                    <input
                      type="number"
                      value={formData.businessExperience}
                      onChange={(e) => handleInputChange('businessExperience', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Months of experience"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Business</label>
                    <Select
                      value={YES_NO_OPTIONS.find(opt => opt.value === String(formData.currentBusiness))}
                      onChange={(selectedOption) => handleInputChange('currentBusiness', selectedOption ? selectedOption.value === 'true' : false)}
                      options={YES_NO_OPTIONS}
                      placeholder="Select"
                      isClearable
                      className="react-select-container"
                      classNamePrefix="react-select"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Registration</label>
                    <Select
                      value={BUSINESS_REGISTRATION_OPTIONS.find(opt => opt.value === formData.businessRegistration)}
                      onChange={(selectedOption) => handleInputChange('businessRegistration', selectedOption ? selectedOption.value : '')}
                      options={BUSINESS_REGISTRATION_OPTIONS}
                      placeholder="Select Registration Type"
                      isClearable
                      className="react-select-container"
                      classNamePrefix="react-select"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Annual Turnover (₹)</label>
                    <input
                      type="number"
                      value={formData.annualTurnover}
                      onChange={(e) => handleInputChange('annualTurnover', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Annual turnover"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Cost (₹)</label>
                    <input
                      type="number"
                      value={formData.projectCost}
                      onChange={(e) => handleInputChange('projectCost', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Total project cost"
                    />
                  </div>
                </div>
              </div>

              {/* Financial Information */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Financial Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Credit Score</label>
                    <input
                      type="number"
                      value={formData.creditScore}
                      onChange={(e) => handleInputChange('creditScore', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Credit score (300-900)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Existing Loans</label>
                    <Select
                      value={YES_NO_OPTIONS.find(opt => opt.value === String(formData.existingLoans))}
                      onChange={(selectedOption) => handleInputChange('existingLoans', selectedOption ? selectedOption.value === 'true' : false)}
                      options={YES_NO_OPTIONS}
                      placeholder="Select"
                      isClearable
                      className="react-select-container"
                      classNamePrefix="react-select"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Collateral Available</label>
                    <Select
                      value={YES_NO_OPTIONS.find(opt => opt.value === String(formData.collateral))}
                      onChange={(selectedOption) => handleInputChange('collateral', selectedOption ? selectedOption.value === 'true' : false)}
                      options={YES_NO_OPTIONS}
                      placeholder="Select"
                      isClearable
                      className="react-select-container"
                      classNamePrefix="react-select"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Additional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="innovation"
                      checked={formData.innovation}
                      onChange={(e) => handleInputChange('innovation', e.target.checked)}
                      className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <label htmlFor="innovation" className="text-sm font-medium text-gray-700">
                      Innovative Business Idea
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="technology"
                      checked={formData.technology}
                      onChange={(e) => handleInputChange('technology', e.target.checked)}
                      className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <label htmlFor="technology" className="text-sm font-medium text-gray-700">
                      Technology-based Solution
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="export"
                      checked={formData.export}
                      onChange={(e) => handleInputChange('export', e.target.checked)}
                      className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <label htmlFor="export" className="text-sm font-medium text-gray-700">
                      Export Potential
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Employment Generation</label>
                    <input
                      type="number"
                      value={formData.employment}
                      onChange={(e) => handleInputChange('employment', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Number of jobs to be created"
                    />
                  </div>
                </div>
              </div>

              {/* Check Eligibility Button */}
              <div className="text-center pb-[24px]">
                <button
                  onClick={checkEligibility}
                  disabled={isChecking}
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isChecking ? 'Checking Eligibility...' : 'Check Eligibility'}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Results Header */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Eligibility Results</h3>
                <p className="text-gray-600">
                  Based on your information, here are the schemes you&apos;re eligible for:
                </p>
              </div>

              {/* Eligible Schemes */}
              {eligibleSchemes.length > 0 && (
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                    <FaCheckCircle className="mr-2" />
                    Eligible Schemes ({eligibleSchemes.length})
                  </h4>
                  <div className="space-y-4">
                    {eligibleSchemes.map(([schemeName, scheme]) => (
                      <div key={schemeName} className="bg-white p-4 rounded-lg border border-green-200">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-semibold text-green-800">{schemeName}</h5>
                          <span className="text-lg font-bold text-green-600">
                            {formatIndianCurrency(scheme.amount)}
                          </span>
                        </div>
                        <div className="text-sm text-green-700 mb-2">
                          {scheme.reasons.join(', ')}
                        </div>
                        <div className="text-sm text-gray-600">
                          <strong>Requirements:</strong> {scheme.requirements.join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ineligible Schemes */}
              {ineligibleSchemes.length > 0 && (
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                    <FaTimesCircle className="mr-2" />
                    Not Eligible ({ineligibleSchemes.length})
                  </h4>
                  <div className="space-y-4">
                    {ineligibleSchemes.map(([schemeName, scheme]) => (
                      <div key={schemeName} className="bg-white p-4 rounded-lg border border-red-200">
                        <h5 className="font-semibold text-red-800 mb-2">{schemeName}</h5>
                        <div className="text-sm text-red-700">
                          <strong>Reasons:</strong> {scheme.reasons.join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setEligibilityResults(null)}
                  className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all duration-300"
                >
                  Check Again
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          )}
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
};

EligibilityChecker.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EligibilityChecker;
