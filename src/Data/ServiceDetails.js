// Comprehensive service details for MSME schemes with correct information
export const serviceDetails = {
    // ARTHA - Funding & Grants
    "PMEGP Loan": {
        name: "PMEGP Loan",
        description: "Prime Minister's Employment Generation Programme",
        icon: "🏭",
        amount: "Up to ₹25 Lakh",
        processingTime: "15-30 days",
        interestRate: "4-6% p.a.",
        eligibility: [
            "Age: 18-40 years (General), 18-45 years (SC/ST/OBC)",
            "Educational qualification: 8th pass minimum",
            "Family income should not exceed ₹1.5 lakh per annum",
            "Should not have availed any subsidy under PMEGP earlier",
            "Project cost should be minimum ₹1 lakh",
            "Should be a first-generation entrepreneur"
        ],
        documents: [
            "Aadhaar Card",
            "Educational certificates",
            "Income certificate",
            "Project report",
            "Quotation for machinery/equipment",
            "Land/building documents",
            "Bank account details",
            "Passport size photographs"
        ],
        benefits: [
            "Subsidy up to 35% of project cost (General category)",
            "Subsidy up to 50% of project cost (SC/ST/OBC/Women)",
            "Margin money contribution only 5-10%",
            "No collateral required for loans up to ₹10 lakh",
            "Training provided by KVIC",
            "Marketing support through KVIC outlets"
        ],
        process: [
            {
                title: "Application Submission",
                description: "Submit application form with required documents to KVIC/KVIB/DIC"
            },
            {
                title: "Project Appraisal",
                description: "Technical and financial appraisal of the project by concerned agency"
            },
            {
                title: "Training",
                description: "Undergo mandatory training program (minimum 2 weeks)"
            },
            {
                title: "Bank Loan Sanction",
                description: "Bank sanctions loan after training completion"
            },
            {
                title: "Subsidy Release",
                description: "Subsidy amount released directly to bank account"
            }
        ],
        links: [
            {
                title: "Official PMEGP Website",
                url: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp",
                description: "Complete information about PMEGP scheme"
            },
            {
                title: "Application Form Download",
                url: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/downloads.jsp",
                description: "Download application forms and guidelines"
            },
            {
                title: "KVIC Official Website",
                url: "https://www.kvic.org.in/",
                description: "Khadi and Village Industries Commission"
            }
        ]
    },

    "MUDRA Loan": {
        name: "MUDRA Loan",
        description: "Micro Units Development and Refinance Agency",
        icon: "💼",
        amount: "Up to ₹10 Lakh",
        processingTime: "7-14 days",
        interestRate: "8.5-12% p.a.",
        eligibility: [
            "Age: 18-65 years",
            "Indian citizen",
            "Business should be in manufacturing, trading, or service sector",
            "Minimum 6 months business experience",
            "Good credit history",
            "Valid business registration (if applicable)"
        ],
        documents: [
            "Aadhaar Card",
            "PAN Card",
            "Business registration certificate",
            "Bank statements (6 months)",
            "ITR (if applicable)",
            "Business plan",
            "Address proof",
            "Passport size photographs"
        ],
        benefits: [
            "Three categories: Shishu (up to ₹50,000), Kishor (₹50,001-5 lakh), Tarun (₹5,00,001-10 lakh)",
            "No collateral required",
            "Quick processing",
            "Flexible repayment options",
            "Available through all banks and NBFCs",
            "Support for women entrepreneurs"
        ],
        process: [
            {
                title: "Choose Bank/NBFC",
                description: "Select any participating bank or NBFC for MUDRA loan"
            },
            {
                title: "Application Submission",
                description: "Submit loan application with required documents"
            },
            {
                title: "Document Verification",
                description: "Bank verifies all submitted documents"
            },
            {
                title: "Credit Assessment",
                description: "Bank assesses creditworthiness and business viability"
            },
            {
                title: "Loan Sanction",
                description: "Loan sanctioned and disbursed to bank account"
            }
        ],
        links: [
            {
                title: "MUDRA Official Website",
                url: "https://www.mudra.org.in/",
                description: "Complete information about MUDRA scheme"
            },
            {
                title: "Participating Banks List",
                url: "https://www.mudra.org.in/participating-banks",
                description: "List of all banks offering MUDRA loans"
            },
            {
                title: "MUDRA Guidelines",
                url: "https://www.mudra.org.in/guidelines",
                description: "Detailed guidelines and procedures"
            }
        ]
    },

    "Startup India Seed Fund": {
        name: "Startup India Seed Fund",
        description: "Government of India's seed funding scheme",
        icon: "🚀",
        amount: "Up to ₹1 Crore",
        processingTime: "30-45 days",
        interestRate: "Equity-based",
        eligibility: [
            "Registered as a startup under Startup India",
            "Incorporated not more than 2 years ago",
            "Innovative business idea with high growth potential",
            "Minimum 2 founders",
            "Technology-based or innovative solution",
            "Not received funding from other government schemes"
        ],
        documents: [
            "Startup India registration certificate",
            "Company incorporation certificate",
            "Business plan and pitch deck",
            "Financial projections",
            "Founder profiles and CVs",
            "Technology/product documentation",
            "Market research report",
            "IP documentation (if any)"
        ],
        benefits: [
            "Up to ₹20 lakh as grant for proof of concept",
            "Up to ₹50 lakh as convertible debentures",
            "Up to ₹30 lakh as debt/convertible debt",
            "Mentorship support",
            "Networking opportunities",
            "Access to government procurement"
        ],
        process: [
            {
                title: "Startup India Registration",
                description: "Register your startup on Startup India portal"
            },
            {
                title: "Application Submission",
                description: "Submit detailed application with business plan"
            },
            {
                title: "Initial Screening",
                description: "Applications screened for basic eligibility"
            },
            {
                title: "Pitch Presentation",
                description: "Present your business idea to evaluation committee"
            },
            {
                title: "Due Diligence",
                description: "Detailed evaluation of business model and team"
            },
            {
                title: "Funding Decision",
                description: "Final decision on funding amount and terms"
            }
        ],
        links: [
            {
                title: "Startup India Portal",
                url: "https://www.startupindia.gov.in/",
                description: "Official Startup India website"
            },
            {
                title: "Seed Fund Scheme",
                url: "https://www.startupindia.gov.in/content/sih/en/government-schemes/seed-fund-scheme.html",
                description: "Detailed information about seed fund scheme"
            },
            {
                title: "Application Portal",
                url: "https://seedfund.startupindia.gov.in/",
                description: "Apply for seed fund scheme"
            }
        ]
    },

    "NAIFF Scheme": {
        name: "NAIFF Scheme",
        description: "New Age Innovation and Funding Framework",
        icon: "💡",
        amount: "Up to ₹2 Crore",
        processingTime: "45-60 days",
        interestRate: "6-8% p.a.",
        eligibility: [
            "Technology-based startups",
            "Innovation in emerging technologies",
            "Minimum 1 year of operations",
            "Revenue generation potential",
            "Scalable business model",
            "Compliance with regulatory requirements"
        ],
        documents: [
            "Company registration documents",
            "Technology documentation",
            "Financial statements",
            "Business model canvas",
            "Market analysis report",
            "Team credentials",
            "IP portfolio",
            "Compliance certificates"
        ],
        benefits: [
            "Low interest rates",
            "Flexible repayment terms",
            "Technology mentoring",
            "Market access support",
            "Regulatory guidance",
            "International exposure opportunities"
        ],
        process: [
            {
                title: "Pre-Application",
                description: "Attend orientation sessions and prepare application"
            },
            {
                title: "Application Review",
                description: "Detailed review of business model and technology"
            },
            {
                title: "Technical Evaluation",
                description: "Assessment by technical experts"
            },
            {
                title: "Financial Assessment",
                description: "Evaluation of financial viability and projections"
            },
            {
                title: "Final Approval",
                description: "Approval and disbursement of funds"
            }
        ],
        links: [
            {
                title: "NAIFF Official Portal",
                url: "https://www.naiif.gov.in/",
                description: "Official NAIFF scheme website"
            },
            {
                title: "Application Guidelines",
                url: "https://www.naiif.gov.in/guidelines",
                description: "Detailed application guidelines"
            },
            {
                title: "Success Stories",
                url: "https://www.naiif.gov.in/success-stories",
                description: "Case studies of funded startups"
            }
        ]
    },

    "Government Grants": {
        name: "Government Grants",
        description: "Various Central and State Government Grant Schemes",
        icon: "🏛️",
        amount: "Up to ₹50 Lakh",
        processingTime: "60-90 days",
        interestRate: "Grant (No repayment)",
        eligibility: [
            "MSME registration required",
            "Innovation in product/process",
            "Employment generation potential",
            "Export potential (for some schemes)",
            "Technology adoption",
            "Compliance with scheme-specific criteria"
        ],
        documents: [
            "MSME registration certificate",
            "Project proposal",
            "Financial statements",
            "Technology documentation",
            "Market study report",
            "Implementation timeline",
            "Budget breakdown",
            "Compliance certificates"
        ],
        benefits: [
            "No repayment required",
            "Up to 75% of project cost",
            "Technology support",
            "Training programs",
            "Marketing assistance",
            "Export promotion support"
        ],
        process: [
            {
                title: "Scheme Selection",
                description: "Choose appropriate government grant scheme"
            },
            {
                title: "Proposal Preparation",
                description: "Prepare detailed project proposal"
            },
            {
                title: "Application Submission",
                description: "Submit application to concerned department"
            },
            {
                title: "Technical Evaluation",
                description: "Evaluation by technical committee"
            },
            {
                title: "Site Inspection",
                description: "Physical inspection of project site"
            },
            {
                title: "Grant Sanction",
                description: "Final approval and grant disbursement"
            }
        ],
        links: [
            {
                title: "MSME Ministry",
                url: "https://msme.gov.in/",
                description: "Ministry of MSME official website"
            },
            {
                title: "Grant Schemes",
                url: "https://msme.gov.in/schemes",
                description: "List of all MSME grant schemes"
            },
            {
                title: "State MSME Portals",
                url: "https://msme.gov.in/state-msme-portals",
                description: "State-wise MSME portals and schemes"
            }
        ]
    },

    "Venture Capital": {
        name: "Venture Capital",
        description: "Private equity funding for high-growth startups",
        icon: "📈",
        amount: "Up to ₹5 Crore",
        processingTime: "90-120 days",
        interestRate: "Equity-based",
        eligibility: [
            "High-growth potential business",
            "Scalable business model",
            "Strong founding team",
            "Market opportunity >₹1000 crore",
            "Technology differentiation",
            "Revenue traction or strong user base"
        ],
        documents: [
            "Pitch deck",
            "Financial model",
            "Market analysis",
            "Competitive analysis",
            "Team profiles",
            "Product roadmap",
            "Legal documents",
            "Due diligence materials"
        ],
        benefits: [
            "Large funding amounts",
            "Strategic guidance",
            "Industry connections",
            "Follow-on funding support",
            "Exit strategy planning",
            "International expansion support"
        ],
        process: [
            {
                title: "Initial Pitch",
                description: "Present business idea to VC partners"
            },
            {
                title: "Due Diligence",
                description: "Comprehensive evaluation of business"
            },
            {
                title: "Term Sheet",
                description: "Negotiate investment terms and conditions"
            },
            {
                title: "Legal Documentation",
                description: "Prepare and execute investment agreements"
            },
            {
                title: "Fund Disbursement",
                description: "Release of investment funds"
            }
        ],
        links: [
            {
                title: "Indian Venture Capital Association",
                url: "https://www.ivca.in/",
                description: "IVCA official website with member VCs"
            },
            {
                title: "Startup Funding Guide",
                url: "https://www.startupindia.gov.in/content/sih/en/government-schemes/funding-guide.html",
                description: "Government guide to startup funding"
            },
            {
                title: "VC Database",
                url: "https://www.crunchbase.com/",
                description: "Database of venture capital firms and investments"
            }
        ]
    },

    // SURAKSHA - Protection & Compliance
    "Trademark Registration": {
        name: "Trademark Registration",
        description: "Brand protection and intellectual property rights",
        icon: "™️",
        processingTime: "6-12 months",
        validity: "10 years (renewable)",
        eligibility: [
            "Distinctive mark or logo",
            "Not similar to existing trademarks",
            "Not descriptive or generic",
            "Used or intended to be used",
            "Compliance with trademark law",
            "Proper classification of goods/services"
        ],
        documents: [
            "Trademark application form",
            "Logo/mark representation",
            "Goods/services description",
            "Power of attorney",
            "User affidavit (if applicable)",
            "Priority documents (if applicable)",
            "Fee payment proof",
            "Identity proof"
        ],
        benefits: [
            "Exclusive brand rights",
            "Legal protection against infringement",
            "Brand value enhancement",
            "Licensing opportunities",
            "International registration basis",
            "Competitive advantage"
        ],
        process: [
            {
                title: "Trademark Search",
                description: "Search for similar existing trademarks"
            },
            {
                title: "Application Filing",
                description: "File trademark application with IPO"
            },
            {
                title: "Formality Check",
                description: "IPO conducts formality examination"
            },
            {
                title: "Examination",
                description: "Substantive examination of application"
            },
            {
                title: "Publication",
                description: "Trademark published in journal"
            },
            {
                title: "Registration",
                description: "Trademark registered upon completion"
            }
        ],
        links: [
            {
                title: "Trademark Search",
                url: "https://www.ipindia.gov.in/trademark-search.htm",
                description: "Trademark search database"
            },
            {
                title: "Trademark Application",
                url: "https://www.ipindia.gov.in/form-and-fees-tm.htm",
                description: "Trademark application forms"
            },
            {
                title: "Trademark Guidelines",
                url: "https://www.ipindia.gov.in/writereaddata/Portal/IPOFormUpload/1_2_1/trademark-manual.pdf",
                description: "Trademark registration guidelines"
            }
        ]
    },

    "Shram Suvidha": {
        name: "Shram Suvidha",
        description: "Labor compliance and employee welfare",
        icon: "👷",
        processingTime: "7-15 days",
        validity: "Annual renewal required",
        eligibility: [
            "Business with employees",
            "Compliance with labor laws",
            "Valid business registration",
            "Employee records maintenance",
            "Safety measures implementation",
            "Welfare fund contributions"
        ],
        documents: [
            "Business registration certificate",
            "Employee records",
            "Safety compliance certificates",
            "Welfare fund contribution proof",
            "Insurance policies",
            "Training records",
            "Inspection reports",
            "Compliance certificates"
        ],
        benefits: [
            "Legal compliance assurance",
            "Employee welfare protection",
            "Government tender eligibility",
            "Reduced inspection frequency",
            "Insurance benefits",
            "Professional credibility"
        ],
        process: [
            {
                title: "Compliance Assessment",
                description: "Evaluate current labor law compliance"
            },
            {
                title: "Document Preparation",
                description: "Prepare all required compliance documents"
            },
            {
                title: "Application Submission",
                description: "Submit application to labor department"
            },
            {
                title: "Inspection",
                description: "Physical inspection of workplace"
            },
            {
                title: "Certificate Issuance",
                description: "Shram Suvidha certificate issued"
            }
        ],
        links: [
            {
                title: "Shram Suvidha Portal",
                url: "https://shramsuvidha.gov.in/",
                description: "Official Shram Suvidha portal"
            },
            {
                title: "Labor Law Compliance",
                url: "https://labour.gov.in/",
                description: "Ministry of Labor and Employment"
            },
            {
                title: "Compliance Guide",
                url: "https://shramsuvidha.gov.in/help",
                description: "Step-by-step compliance guide"
            }
        ]
    },

    "Patent Registration": {
        name: "Patent Registration",
        description: "Intellectual property protection for inventions",
        icon: "🔬",
        processingTime: "12-18 months",
        validity: "20 years from filing date",
        eligibility: [
            "Novel invention",
            "Non-obvious innovation",
            "Industrial applicability",
            "First to file principle",
            "Disclosure of invention",
            "Patentable subject matter"
        ],
        documents: [
            "Patent application form",
            "Specification of invention",
            "Claims and abstract",
            "Drawings (if applicable)",
            "Power of attorney",
            "Assignment deed (if applicable)",
            "Priority documents (if applicable)",
            "Fee payment proof"
        ],
        benefits: [
            "Exclusive rights for 20 years",
            "Monopoly over invention",
            "Licensing opportunities",
            "Competitive advantage",
            "Investment attraction",
            "International protection"
        ],
        process: [
            {
                title: "Patent Search",
                description: "Conduct prior art search"
            },
            {
                title: "Application Filing",
                description: "File patent application with complete specification"
            },
            {
                title: "Formality Check",
                description: "IPO conducts formality examination"
            },
            {
                title: "Publication",
                description: "Application published after 18 months"
            },
            {
                title: "Examination",
                description: "Substantive examination of patent application"
            },
            {
                title: "Grant",
                description: "Patent granted upon meeting requirements"
            }
        ],
        links: [
            {
                title: "IPO India",
                url: "https://www.ipindia.gov.in/",
                description: "Intellectual Property Office of India"
            },
            {
                title: "Patent Search",
                url: "https://www.ipindia.gov.in/patent-search.htm",
                description: "Patent search database"
            },
            {
                title: "Patent Guidelines",
                url: "https://www.ipindia.gov.in/writereaddata/Portal/IPOFormUpload/1_2_1/patent-manual.pdf",
                description: "Patent application guidelines"
            }
        ]
    },

    "Copyright Registration": {
        name: "Copyright Registration",
        description: "Protection of original creative works",
        icon: "📝",
        processingTime: "2-3 months",
        validity: "Lifetime + 60 years",
        eligibility: [
            "Original creative work",
            "Literary, artistic, musical, or dramatic work",
            "Fixed in tangible medium",
            "Author's original creation",
            "Not copied from existing work",
            "Compliance with copyright law"
        ],
        documents: [
            "Copyright application form",
            "Copy of the work",
            "Author's identity proof",
            "Power of attorney",
            "Assignment deed (if applicable)",
            "Fee payment proof",
            "Work description",
            "Publication details (if published)"
        ],
        benefits: [
            "Exclusive rights over work",
            "Legal protection against infringement",
            "Commercial exploitation rights",
            "Moral rights protection",
            "International recognition",
            "Licensing opportunities"
        ],
        process: [
            {
                title: "Work Preparation",
                description: "Prepare the creative work in final form"
            },
            {
                title: "Application Filing",
                description: "File copyright application with required documents"
            },
            {
                title: "Examination",
                description: "Copyright office examines the application"
            },
            {
                title: "Objection Period",
                description: "30-day period for any objections"
            },
            {
                title: "Registration",
                description: "Copyright certificate issued upon approval"
            }
        ],
        links: [
            {
                title: "Copyright Office",
                url: "https://copyright.gov.in/",
                description: "Official Copyright Office of India"
            },
            {
                title: "Copyright Application",
                url: "https://copyright.gov.in/UserRegistration/frmLoginPage.aspx",
                description: "Online copyright application portal"
            },
            {
                title: "Copyright Guidelines",
                url: "https://copyright.gov.in/Documents/CopyrightRules2013.pdf",
                description: "Copyright registration guidelines"
            }
        ]
    },

    "ISO Certification": {
        name: "ISO Certification",
        description: "International Organization for Standardization certification",
        icon: "🏆",
        processingTime: "30-60 days",
        validity: "3 years (annual surveillance)",
        eligibility: [
            "Established business operations",
            "Quality management system implementation",
            "Documented procedures and processes",
            "Trained personnel",
            "Compliance with ISO standards",
            "Management commitment"
        ],
        documents: [
            "Company registration documents",
            "Quality manual",
            "Process documentation",
            "Training records",
            "Management review records",
            "Internal audit reports",
            "Corrective action records",
            "Organizational chart"
        ],
        benefits: [
            "International recognition",
            "Improved quality management",
            "Customer confidence",
            "Export opportunities",
            "Government tender eligibility",
            "Competitive advantage"
        ],
        process: [
            {
                title: "Gap Analysis",
                description: "Assess current processes against ISO standards"
            },
            {
                title: "System Implementation",
                description: "Implement quality management system"
            },
            {
                title: "Internal Audit",
                description: "Conduct internal audit of the system"
            },
            {
                title: "Certification Body Selection",
                description: "Choose accredited certification body"
            },
            {
                title: "External Audit",
                description: "Certification body conducts audit"
            },
            {
                title: "Certificate Issuance",
                description: "ISO certificate issued upon compliance"
            }
        ],
        links: [
            {
                title: "ISO Official Website",
                url: "https://www.iso.org/",
                description: "International Organization for Standardization"
            },
            {
                title: "BIS India",
                url: "https://www.bis.gov.in/",
                description: "Bureau of Indian Standards"
            },
            {
                title: "ISO Certification Bodies",
                url: "https://www.iso.org/certification-bodies.html",
                description: "List of accredited certification bodies"
            }
        ]
    },

    "GST Registration": {
        name: "GST Registration",
        description: "Goods and Services Tax registration",
        icon: "🧾",
        processingTime: "3-7 days",
        validity: "Permanent (unless cancelled)",
        eligibility: [
            "Annual turnover >₹20 lakh (₹10 lakh for special states)",
            "Inter-state supply of goods/services",
            "E-commerce platform sellers",
            "Input service distributors",
            "Casual taxable persons",
            "Non-resident taxable persons"
        ],
        documents: [
            "PAN Card",
            "Aadhaar Card",
            "Business registration proof",
            "Bank account details",
            "Business address proof",
            "Digital signature certificate",
            "Photographs",
            "Business activity proof"
        ],
        benefits: [
            "Legal recognition as GST taxpayer",
            "Input tax credit benefits",
            "Inter-state business opportunities",
            "E-commerce platform access",
            "Government tender eligibility",
            "Professional credibility"
        ],
        process: [
            {
                title: "GST Portal Registration",
                description: "Create account on GST portal"
            },
            {
                title: "Form Submission",
                description: "Submit GST REG-01 form with documents"
            },
            {
                title: "Document Verification",
                description: "GST department verifies submitted documents"
            },
            {
                title: "ARN Generation",
                description: "Application Reference Number generated"
            },
            {
                title: "GSTIN Allotment",
                description: "GST Identification Number allotted"
            }
        ],
        links: [
            {
                title: "GST Portal",
                url: "https://www.gst.gov.in/",
                description: "Official GST registration portal"
            },
            {
                title: "GST Registration Guide",
                url: "https://www.gst.gov.in/help/registration",
                description: "Complete GST registration guide"
            },
            {
                title: "GST Helpdesk",
                url: "https://www.gst.gov.in/help/helpdesk",
                description: "GST helpdesk and support"
            }
        ]
    },

    // NISHTHA - Certification & Recognition
    "Startup India Certificate": {
        name: "Startup India Certificate",
        description: "Government recognition for innovative startups",
        icon: "🚀",
        processingTime: "5-10 days",
        validity: "10 years from incorporation",
        eligibility: [
            "Incorporated as Private Limited Company, Partnership, or LLP",
            "Turnover not exceeding ₹100 crore in any financial year",
            "Working towards innovation, development, or improvement",
            "Not formed by splitting up or reconstruction",
            "Innovation in products, processes, or services",
            "Scalable business model with high potential"
        ],
        documents: [
            "Company incorporation certificate",
            "PAN card of company",
            "Brief description of business",
            "Innovation details",
            "Business plan",
            "Financial projections",
            "Founder details",
            "Supporting documents for innovation"
        ],
        benefits: [
            "Tax benefits for 3 years",
            "Self-certification compliance",
            "Fast-track patent application",
            "Government tender benefits",
            "Funding opportunities",
            "Networking and mentoring"
        ],
        process: [
            {
                title: "Company Incorporation",
                description: "Incorporate company as per Companies Act"
            },
            {
                title: "Application Submission",
                description: "Submit application on Startup India portal"
            },
            {
                title: "Document Verification",
                description: "DIPP verifies submitted documents"
            },
            {
                title: "Innovation Assessment",
                description: "Evaluation of innovation and scalability"
            },
            {
                title: "Certificate Issuance",
                description: "Startup India certificate issued"
            }
        ],
        links: [
            {
                title: "Startup India Portal",
                url: "https://www.startupindia.gov.in/",
                description: "Official Startup India website"
            },
            {
                title: "Registration Process",
                url: "https://www.startupindia.gov.in/content/sih/en/startup-scheme.html",
                description: "Startup India registration process"
            },
            {
                title: "Benefits Guide",
                url: "https://www.startupindia.gov.in/content/sih/en/benefits.html",
                description: "Complete benefits guide for startups"
            }
        ]
    },

    "MSME Registration": {
        name: "MSME Registration",
        description: "Udyam Registration for MSME benefits",
        icon: "📋",
        processingTime: "1-2 days",
        validity: "Permanent (self-declaration)",
        eligibility: [
            "Micro: Investment <₹1 crore, Turnover <₹5 crore",
            "Small: Investment <₹10 crore, Turnover <₹50 crore",
            "Medium: Investment <₹50 crore, Turnover <₹250 crore",
            "Valid Aadhaar number",
            "PAN card",
            "Business activity details"
        ],
        documents: [
            "Aadhaar Card",
            "PAN Card",
            "Business address proof",
            "Bank account details",
            "Business activity description",
            "Investment and turnover details"
        ],
        benefits: [
            "Priority sector lending",
            "Government tender benefits",
            "Subsidy schemes access",
            "Credit guarantee schemes",
            "Technology upgradation support",
            "Export promotion benefits"
        ],
        process: [
            {
                title: "Online Registration",
                description: "Register on Udyam portal with Aadhaar"
            },
            {
                title: "Business Details",
                description: "Fill business information and activities"
            },
            {
                title: "Verification",
                description: "System verifies Aadhaar and PAN details"
            },
            {
                title: "Certificate Generation",
                description: "Udyam certificate generated instantly"
            }
        ],
        links: [
            {
                title: "Udyam Registration Portal",
                url: "https://udyamregistration.gov.in/",
                description: "Official Udyam registration website"
            },
            {
                title: "MSME Benefits Guide",
                url: "https://msme.gov.in/benefits-msme-registration",
                description: "Complete guide to MSME registration benefits"
            },
            {
                title: "Registration Help",
                url: "https://udyamregistration.gov.in/help",
                description: "Step-by-step registration help"
            }
        ]
    },

    "ZED Certification": {
        name: "ZED Certification",
        description: "Zero Defect Zero Effect certification for manufacturing",
        icon: "⭐",
        processingTime: "30-45 days",
        validity: "3 years (renewable)",
        eligibility: [
            "Manufacturing MSMEs",
            "Compliance with quality standards",
            "Environmental compliance",
            "Energy efficiency measures",
            "Technology adoption",
            "Continuous improvement culture"
        ],
        documents: [
            "MSME registration certificate",
            "Manufacturing license",
            "Quality management documents",
            "Environmental compliance certificates",
            "Energy audit reports",
            "Technology adoption proof",
            "Employee training records",
            "Process documentation"
        ],
        benefits: [
            "Quality improvement",
            "Environmental compliance",
            "Energy efficiency",
            "Export opportunities",
            "Government tender benefits",
            "Competitive advantage"
        ],
        process: [
            {
                title: "Self-Assessment",
                description: "Complete ZED maturity assessment"
            },
            {
                title: "Application Submission",
                description: "Submit application with required documents"
            },
            {
                title: "Assessment by QCI",
                description: "Quality Council of India assessment"
            },
            {
                title: "Site Visit",
                description: "Physical assessment of manufacturing unit"
            },
            {
                title: "Certification",
                description: "ZED certificate issued upon compliance"
            }
        ],
        links: [
            {
                title: "ZED Portal",
                url: "https://zed.org.in/",
                description: "Official ZED certification portal"
            },
            {
                title: "ZED Guidelines",
                url: "https://zed.org.in/guidelines",
                description: "ZED certification guidelines"
            },
            {
                title: "QCI Website",
                url: "https://www.qcin.org/",
                description: "Quality Council of India"
            }
        ]
    },

    "GeM Registration": {
        name: "GeM Registration",
        description: "Government e-Marketplace registration",
        icon: "🏛️",
        processingTime: "2-3 days",
        validity: "Permanent (with annual renewal)",
        eligibility: [
            "Valid business registration",
            "PAN card",
            "Bank account",
            "GST registration (if applicable)",
            "Valid email and mobile number",
            "Compliance with GeM terms"
        ],
        documents: [
            "Business registration certificate",
            "PAN card",
            "Bank account details",
            "GST certificate (if applicable)",
            "Digital signature certificate",
            "Address proof",
            "Contact details",
            "Business category proof"
        ],
        benefits: [
            "Access to government procurement",
            "Transparent bidding process",
            "Payment security",
            "Reduced paperwork",
            "Wider market reach",
            "Competitive pricing"
        ],
        process: [
            {
                title: "Portal Registration",
                description: "Create account on GeM portal"
            },
            {
                title: "Business Verification",
                description: "Verify business details and documents"
            },
            {
                title: "Profile Completion",
                description: "Complete seller profile with product details"
            },
            {
                title: "Approval",
                description: "GeM approves registration"
            },
            {
                title: "Seller Onboarding",
                description: "Complete seller onboarding process"
            }
        ],
        links: [
            {
                title: "GeM Portal",
                url: "https://gem.gov.in/",
                description: "Official Government e-Marketplace"
            },
            {
                title: "Seller Registration",
                url: "https://gem.gov.in/seller-registration",
                description: "GeM seller registration process"
            },
            {
                title: "GeM Help",
                url: "https://gem.gov.in/help",
                description: "GeM help and support"
            }
        ]
    },

    "FSSAI Certificate": {
        name: "FSSAI Certificate",
        description: "Food Safety and Standards Authority of India license",
        icon: "🍽️",
        processingTime: "7-15 days",
        validity: "1-5 years (based on business type)",
        eligibility: [
            "Food business operators",
            "Manufacturers, processors, packers",
            "Importers, exporters",
            "Retailers, distributors",
            "Caterers, restaurants",
            "Online food delivery platforms"
        ],
        documents: [
            "Business registration proof",
            "PAN Card",
            "Address proof",
            "Food safety plan",
            "HACCP plan (if applicable)",
            "List of food products",
            "Manufacturing process details",
            "Quality control measures"
        ],
        benefits: [
            "Legal compliance for food business",
            "Consumer trust and confidence",
            "Export opportunities",
            "E-commerce platform access",
            "Government tender eligibility",
            "Brand credibility"
        ],
        process: [
            {
                title: "Application Submission",
                description: "Submit FSSAI license application online"
            },
            {
                title: "Document Verification",
                description: "FSSAI verifies submitted documents"
            },
            {
                title: "Inspection (if required)",
                description: "Physical inspection of premises"
            },
            {
                title: "License Issuance",
                description: "FSSAI license issued upon compliance"
            }
        ],
        links: [
            {
                title: "FSSAI Portal",
                url: "https://foscos.fssai.gov.in/",
                description: "Official FSSAI licensing portal"
            },
            {
                title: "FSSAI Guidelines",
                url: "https://www.fssai.gov.in/cms/guidelines.php",
                description: "FSSAI guidelines and regulations"
            },
            {
                title: "Food Safety Training",
                url: "https://www.fssai.gov.in/cms/training.php",
                description: "Food safety training programs"
            }
        ]
    },

    "IEC Certificate": {
        name: "IEC Certificate",
        description: "Import Export Code registration",
        icon: "🌍",
        processingTime: "1-2 days",
        validity: "Permanent (unless cancelled)",
        eligibility: [
            "Indian citizen or company",
            "Valid PAN card",
            "Bank account in India",
            "Business registration",
            "No criminal record",
            "Compliance with export regulations"
        ],
        documents: [
            "PAN Card",
            "Aadhaar Card",
            "Business registration proof",
            "Bank account details",
            "Address proof",
            "Digital signature certificate",
            "Photographs",
            "Business activity details"
        ],
        benefits: [
            "Legal export/import operations",
            "Access to international markets",
            "Export incentives and benefits",
            "Foreign exchange earnings",
            "Government export schemes",
            "Global business opportunities"
        ],
        process: [
            {
                title: "DGFT Portal Registration",
                description: "Register on DGFT portal"
            },
            {
                title: "IEC Application",
                description: "Submit IEC application form"
            },
            {
                title: "Document Verification",
                description: "DGFT verifies submitted documents"
            },
            {
                title: "IEC Allotment",
                description: "Import Export Code allotted"
            }
        ],
        links: [
            {
                title: "DGFT Portal",
                url: "https://www.dgft.gov.in/",
                description: "Directorate General of Foreign Trade"
            },
            {
                title: "IEC Registration",
                url: "https://www.dgft.gov.in/CP/",
                description: "IEC registration portal"
            },
            {
                title: "Export Guidelines",
                url: "https://www.dgft.gov.in/CP/?opt=policy",
                description: "Export policy and guidelines"
            }
        ]
    },

    // UTTHAN - Business Setup & Registration
    "Private Limited Company": {
        name: "Private Limited Company",
        description: "Complete company incorporation with limited liability",
        icon: "🏢",
        processingTime: "7-15 days",
        validity: "Permanent (with annual compliance)",
        eligibility: [
            "Minimum 2 directors and 2 shareholders",
            "Minimum paid-up capital of ₹1 lakh",
            "Indian residents or NRIs",
            "Valid DIN (Director Identification Number)",
            "Unique company name",
            "Registered office address in India"
        ],
        documents: [
            "Director's PAN card and Aadhaar",
            "Address proof of directors",
            "Registered office address proof",
            "Digital signature certificates",
            "Memorandum of Association",
            "Articles of Association",
            "Director's consent forms",
            "Name approval application"
        ],
        benefits: [
            "Limited liability protection",
            "Separate legal entity",
            "Easy fund raising",
            "Professional credibility",
            "Perpetual succession",
            "Transferable shares"
        ],
        process: [
            {
                title: "Name Reservation",
                description: "Apply for company name approval with MCA"
            },
            {
                title: "DIN Application",
                description: "Apply for Director Identification Number"
            },
            {
                title: "Document Preparation",
                description: "Prepare MOA, AOA, and other incorporation documents"
            },
            {
                title: "SPICe+ Filing",
                description: "File incorporation application with MCA"
            },
            {
                title: "Certificate Issuance",
                description: "Certificate of Incorporation issued by ROC"
            }
        ],
        links: [
            {
                title: "MCA Portal",
                url: "https://www.mca.gov.in/",
                description: "Ministry of Corporate Affairs"
            },
            {
                title: "SPICe+ Form",
                url: "https://www.mca.gov.in/MinistryV2/incorporation_company.html",
                description: "Company incorporation form"
            },
            {
                title: "Company Incorporation Guide",
                url: "https://www.mca.gov.in/MinistryV2/incorporation_company.html",
                description: "Complete incorporation guide"
            }
        ]
    },

    "One Person Company": {
        name: "One Person Company",
        description: "Solo entrepreneur company setup with limited liability",
        icon: "👤",
        processingTime: "7-15 days",
        validity: "Permanent (with annual compliance)",
        eligibility: [
            "Single person as director and shareholder",
            "Indian citizen or NRI",
            "Minimum paid-up capital of ₹1 lakh",
            "Valid DIN",
            "Unique company name",
            "Registered office address in India"
        ],
        documents: [
            "Director's PAN card and Aadhaar",
            "Address proof of director",
            "Registered office address proof",
            "Digital signature certificate",
            "Memorandum of Association",
            "Articles of Association",
            "Nominee details",
            "Name approval application"
        ],
        benefits: [
            "Limited liability protection",
            "Single person ownership",
            "Separate legal entity",
            "Professional credibility",
            "Easy fund raising",
            "Perpetual succession"
        ],
        process: [
            {
                title: "Name Reservation",
                description: "Apply for company name approval"
            },
            {
                title: "DIN Application",
                description: "Apply for Director Identification Number"
            },
            {
                title: "Document Preparation",
                description: "Prepare incorporation documents with nominee details"
            },
            {
                title: "SPICe+ Filing",
                description: "File OPC incorporation application"
            },
            {
                title: "Certificate Issuance",
                description: "Certificate of Incorporation issued"
            }
        ],
        links: [
            {
                title: "MCA Portal",
                url: "https://www.mca.gov.in/",
                description: "Ministry of Corporate Affairs"
            },
            {
                title: "OPC Guidelines",
                url: "https://www.mca.gov.in/MinistryV2/onepersoncompany.html",
                description: "One Person Company guidelines"
            },
            {
                title: "SPICe+ Form",
                url: "https://www.mca.gov.in/MinistryV2/incorporation_company.html",
                description: "Company incorporation form"
            }
        ]
    },

    "Limited Liability Partnership": {
        name: "Limited Liability Partnership",
        description: "Partnership with limited liability protection",
        icon: "🤝",
        processingTime: "7-15 days",
        validity: "Permanent (with annual compliance)",
        eligibility: [
            "Minimum 2 partners",
            "At least one designated partner",
            "Valid DPIN (Designated Partner Identification Number)",
            "Unique LLP name",
            "Registered office address",
            "LLP agreement"
        ],
        documents: [
            "Partners' PAN card and Aadhaar",
            "Address proof of partners",
            "Registered office address proof",
            "Digital signature certificates",
            "LLP agreement",
            "Designated partner consent",
            "Name approval application",
            "Form 2 (Incorporation document)"
        ],
        benefits: [
            "Limited liability protection",
            "Flexible management structure",
            "Tax benefits",
            "Professional credibility",
            "Easy compliance",
            "Separate legal entity"
        ],
        process: [
            {
                title: "Name Reservation",
                description: "Apply for LLP name approval"
            },
            {
                title: "DPIN Application",
                description: "Apply for Designated Partner Identification Number"
            },
            {
                title: "Document Preparation",
                description: "Prepare LLP agreement and incorporation documents"
            },
            {
                title: "Form 2 Filing",
                description: "File LLP incorporation application"
            },
            {
                title: "Certificate Issuance",
                description: "Certificate of Incorporation issued"
            }
        ],
        links: [
            {
                title: "MCA Portal",
                url: "https://www.mca.gov.in/",
                description: "Ministry of Corporate Affairs"
            },
            {
                title: "LLP Guidelines",
                url: "https://www.mca.gov.in/MinistryV2/llp.html",
                description: "LLP incorporation guidelines"
            },
            {
                title: "LLP Forms",
                url: "https://www.mca.gov.in/MinistryV2/llpforms.html",
                description: "LLP incorporation forms"
            }
        ]
    },

    "Partnership Firm": {
        name: "Partnership Firm",
        description: "Traditional partnership business registration",
        icon: "👥",
        processingTime: "3-7 days",
        validity: "Permanent (with annual compliance)",
        eligibility: [
            "Minimum 2 partners",
            "Partnership deed required",
            "Business name registration",
            "Valid business address",
            "Partners' identity proof",
            "Business activity details"
        ],
        documents: [
            "Partners' PAN card and Aadhaar",
            "Address proof of partners",
            "Business address proof",
            "Partnership deed",
            "Business name registration",
            "Bank account details",
            "Business activity description",
            "Partners' photographs"
        ],
        benefits: [
            "Easy formation",
            "Flexible management",
            "Tax benefits",
            "Professional credibility",
            "Business name protection",
            "Bank account opening"
        ],
        process: [
            {
                title: "Partnership Deed",
                description: "Draft and execute partnership deed"
            },
            {
                title: "Name Registration",
                description: "Register business name with registrar"
            },
            {
                title: "Document Preparation",
                description: "Prepare all required documents"
            },
            {
                title: "Registration Application",
                description: "Submit partnership registration application"
            },
            {
                title: "Certificate Issuance",
                description: "Partnership registration certificate issued"
            }
        ],
        links: [
            {
                title: "Partnership Registration",
                url: "https://www.india.gov.in/partnership-firm-registration",
                description: "Partnership firm registration guide"
            },
            {
                title: "Partnership Act",
                url: "https://www.indiacode.nic.in/handle/123456789/2193",
                description: "Indian Partnership Act 1932"
            },
            {
                title: "Business Registration",
                url: "https://www.startupindia.gov.in/",
                description: "Startup India registration portal"
            }
        ]
    },

    "Section 8 Company": {
        name: "Section 8 Company",
        description: "Non-profit organization for charitable purposes",
        icon: "❤️",
        processingTime: "15-30 days",
        validity: "Permanent (with annual compliance)",
        eligibility: [
            "Charitable, educational, or social purpose",
            "No profit distribution",
            "Minimum 2 directors",
            "Valid DIN",
            "Unique company name",
            "Registered office address"
        ],
        documents: [
            "Directors' PAN card and Aadhaar",
            "Address proof of directors",
            "Registered office address proof",
            "Digital signature certificates",
            "Memorandum of Association",
            "Articles of Association",
            "License application",
            "Charitable purpose details"
        ],
        benefits: [
            "Tax exemption benefits",
            "Limited liability protection",
            "Professional credibility",
            "Government recognition",
            "Donation benefits",
            "Separate legal entity"
        ],
        process: [
            {
                title: "License Application",
                description: "Apply for Section 8 company license"
            },
            {
                title: "Name Reservation",
                description: "Apply for company name approval"
            },
            {
                title: "Document Preparation",
                description: "Prepare MOA, AOA with charitable objectives"
            },
            {
                title: "Incorporation Filing",
                description: "File incorporation application with MCA"
            },
            {
                title: "Certificate Issuance",
                description: "Certificate of Incorporation issued"
            }
        ],
        links: [
            {
                title: "MCA Portal",
                url: "https://www.mca.gov.in/",
                description: "Ministry of Corporate Affairs"
            },
            {
                title: "Section 8 Guidelines",
                url: "https://www.mca.gov.in/MinistryV2/section8company.html",
                description: "Section 8 company guidelines"
            },
            {
                title: "License Application",
                url: "https://www.mca.gov.in/MinistryV2/section8company.html",
                description: "Section 8 license application"
            }
        ]
    },

    "12A & 80G Registration": {
        name: "12A & 80G Registration",
        description: "Tax exemption certificates for charitable organizations",
        icon: "📜",
        processingTime: "30-60 days",
        validity: "5 years (renewable)",
        eligibility: [
            "Registered charitable organization",
            "Charitable, religious, or educational purpose",
            "No profit distribution",
            "Proper accounting system",
            "Compliance with IT Act",
            "Valid registration certificate"
        ],
        documents: [
            "Registration certificate",
            "Memorandum of Association",
            "Articles of Association",
            "Audited financial statements",
            "Activity report",
            "Bank statements",
            "Income tax returns",
            "Compliance certificates"
        ],
        benefits: [
            "Tax exemption on income",
            "Donation benefits for donors",
            "Government recognition",
            "Credibility enhancement",
            "Fund raising advantages",
            "Compliance benefits"
        ],
        process: [
            {
                title: "Document Preparation",
                description: "Prepare all required documents and financial statements"
            },
            {
                title: "Application Submission",
                description: "Submit 12A and 80G applications to IT department"
            },
            {
                title: "Document Verification",
                description: "IT department verifies submitted documents"
            },
            {
                title: "Inspection",
                description: "Physical inspection of organization (if required)"
            },
            {
                title: "Certificate Issuance",
                description: "12A and 80G certificates issued"
            }
        ],
        links: [
            {
                title: "Income Tax Portal",
                url: "https://www.incometax.gov.in/",
                description: "Official Income Tax Department portal"
            },
            {
                title: "12A Registration",
                url: "https://www.incometax.gov.in/iec/foportal/help/12a-registration",
                description: "12A registration guide"
            },
            {
                title: "80G Registration",
                url: "https://www.incometax.gov.in/iec/foportal/help/80g-registration",
                description: "80G registration guide"
            }
        ]
    },

    // PRAGATI - Business Growth
    "Digital Marketing": {
        name: "Digital Marketing",
        description: "Comprehensive online marketing strategy and implementation",
        icon: "📱",
        processingTime: "7-14 days",
        validity: "Ongoing service",
        eligibility: [
            "Established business or startup",
            "Online presence required",
            "Marketing budget allocation",
            "Clear business objectives",
            "Target audience definition",
            "Competitive analysis"
        ],
        documents: [
            "Business registration certificate",
            "Brand guidelines",
            "Marketing objectives",
            "Target audience details",
            "Competitor analysis",
            "Budget allocation",
            "Previous marketing data",
            "Business goals"
        ],
        benefits: [
            "Increased online visibility",
            "Higher conversion rates",
            "Cost-effective marketing",
            "Real-time analytics",
            "Targeted audience reach",
            "Brand awareness"
        ],
        process: [
            {
                title: "Strategy Development",
                description: "Develop comprehensive digital marketing strategy"
            },
            {
                title: "Platform Setup",
                description: "Set up social media and advertising accounts"
            },
            {
                title: "Content Creation",
                description: "Create engaging content and campaigns"
            },
            {
                title: "Campaign Launch",
                description: "Launch targeted marketing campaigns"
            },
            {
                title: "Monitoring & Optimization",
                description: "Monitor performance and optimize campaigns"
            }
        ],
        links: [
            {
                title: "Google Ads",
                url: "https://ads.google.com/",
                description: "Google advertising platform"
            },
            {
                title: "Facebook Business",
                url: "https://business.facebook.com/",
                description: "Facebook marketing platform"
            },
            {
                title: "Digital Marketing Guide",
                url: "https://www.startupindia.gov.in/content/sih/en/government-schemes/digital-marketing.html",
                description: "Government digital marketing resources"
            }
        ]
    },

    "Website Development": {
        name: "Website Development",
        description: "Professional website design and development",
        icon: "💻",
        processingTime: "15-30 days",
        validity: "Ongoing maintenance",
        eligibility: [
            "Business or organization",
            "Clear website objectives",
            "Content and images ready",
            "Domain name availability",
            "Hosting requirements",
            "Design preferences"
        ],
        documents: [
            "Business registration certificate",
            "Brand guidelines",
            "Content and images",
            "Domain name details",
            "Hosting requirements",
            "Design preferences",
            "Functionality requirements",
            "SEO requirements"
        ],
        benefits: [
            "Professional online presence",
            "24/7 business availability",
            "Global reach",
            "Cost-effective marketing",
            "Customer engagement",
            "Business credibility"
        ],
        process: [
            {
                title: "Requirements Analysis",
                description: "Analyze business requirements and objectives"
            },
            {
                title: "Design & Prototype",
                description: "Create website design and prototype"
            },
            {
                title: "Development",
                description: "Develop website with required functionality"
            },
            {
                title: "Testing & Optimization",
                description: "Test website and optimize performance"
            },
            {
                title: "Launch & Maintenance",
                description: "Launch website and provide ongoing maintenance"
            }
        ],
        links: [
            {
                title: "Domain Registration",
                url: "https://www.registry.in/",
                description: "Official .in domain registry"
            },
            {
                title: "Web Hosting Guide",
                url: "https://www.startupindia.gov.in/content/sih/en/government-schemes/web-hosting.html",
                description: "Government web hosting resources"
            },
            {
                title: "Website Development Tools",
                url: "https://www.digitalindia.gov.in/",
                description: "Digital India initiative resources"
            }
        ]
    },

    "Logo Design": {
        name: "Logo Design",
        description: "Professional brand identity and logo design",
        icon: "🎨",
        processingTime: "5-10 days",
        validity: "Permanent",
        eligibility: [
            "Business or organization",
            "Clear brand vision",
            "Design preferences",
            "Target audience understanding",
            "Brand positioning",
            "Competitive analysis"
        ],
        documents: [
            "Business registration certificate",
            "Brand guidelines",
            "Design preferences",
            "Color preferences",
            "Typography preferences",
            "Competitor logos",
            "Brand positioning",
            "Target audience details"
        ],
        benefits: [
            "Professional brand identity",
            "Brand recognition",
            "Marketing consistency",
            "Customer trust",
            "Competitive advantage",
            "Brand value"
        ],
        process: [
            {
                title: "Brand Analysis",
                description: "Analyze brand positioning and requirements"
            },
            {
                title: "Concept Development",
                description: "Develop multiple logo concepts"
            },
            {
                title: "Design Refinement",
                description: "Refine selected concept based on feedback"
            },
            {
                title: "Final Design",
                description: "Create final logo with variations"
            },
            {
                title: "Brand Guidelines",
                description: "Provide brand guidelines and usage rules"
            }
        ],
        links: [
            {
                title: "Design Inspiration",
                url: "https://www.behance.net/",
                description: "Creative design portfolio platform"
            },
            {
                title: "Brand Guidelines",
                url: "https://www.startupindia.gov.in/content/sih/en/government-schemes/brand-guidelines.html",
                description: "Government brand guidelines resources"
            },
            {
                title: "Logo Design Tools",
                url: "https://www.canva.com/",
                description: "Online design platform"
            }
        ]
    },

    "Business Growth Programs": {
        name: "Business Growth Programs",
        description: "Strategic planning and growth implementation",
        icon: "📊",
        processingTime: "30-60 days",
        validity: "Ongoing support",
        eligibility: [
            "Established business",
            "Growth objectives",
            "Market analysis",
            "Financial planning",
            "Team development",
            "Strategic vision"
        ],
        documents: [
            "Business registration certificate",
            "Financial statements",
            "Business plan",
            "Market analysis",
            "Growth objectives",
            "Team structure",
            "Competitive analysis",
            "Strategic goals"
        ],
        benefits: [
            "Strategic growth planning",
            "Market expansion",
            "Revenue optimization",
            "Operational efficiency",
            "Team development",
            "Competitive advantage"
        ],
        process: [
            {
                title: "Business Analysis",
                description: "Analyze current business performance and potential"
            },
            {
                title: "Strategy Development",
                description: "Develop comprehensive growth strategy"
            },
            {
                title: "Implementation Plan",
                description: "Create detailed implementation roadmap"
            },
            {
                title: "Execution Support",
                description: "Provide ongoing support for strategy execution"
            },
            {
                title: "Monitoring & Optimization",
                description: "Monitor progress and optimize strategies"
            }
        ],
        links: [
            {
                title: "Business Growth Guide",
                url: "https://www.startupindia.gov.in/content/sih/en/government-schemes/business-growth.html",
                description: "Government business growth resources"
            },
            {
                title: "MSME Growth",
                url: "https://msme.gov.in/",
                description: "MSME growth and development programs"
            },
            {
                title: "Strategic Planning",
                url: "https://www.digitalindia.gov.in/",
                description: "Digital India business resources"
            }
        ]
    },

    "Merger & Acquisition": {
        name: "Merger & Acquisition",
        description: "Business expansion through mergers and acquisitions",
        icon: "🔄",
        processingTime: "90-180 days",
        validity: "One-time service",
        eligibility: [
            "Established business",
            "Financial stability",
            "Legal compliance",
            "Due diligence readiness",
            "Strategic objectives",
            "Management capability"
        ],
        documents: [
            "Business registration certificates",
            "Financial statements",
            "Legal compliance certificates",
            "Due diligence reports",
            "Valuation reports",
            "Legal agreements",
            "Management structure",
            "Strategic plans"
        ],
        benefits: [
            "Market expansion",
            "Synergy benefits",
            "Competitive advantage",
            "Resource optimization",
            "Revenue growth",
            "Market share increase"
        ],
        process: [
            {
                title: "Strategic Planning",
                description: "Develop M&A strategy and objectives"
            },
            {
                title: "Target Identification",
                description: "Identify potential acquisition targets"
            },
            {
                title: "Due Diligence",
                description: "Conduct comprehensive due diligence"
            },
            {
                title: "Negotiation",
                description: "Negotiate terms and conditions"
            },
            {
                title: "Integration",
                description: "Execute merger/acquisition and integrate operations"
            }
        ],
        links: [
            {
                title: "M&A Guidelines",
                url: "https://www.mca.gov.in/MinistryV2/mergeracquisition.html",
                description: "MCA merger and acquisition guidelines"
            },
            {
                title: "Due Diligence",
                url: "https://www.startupindia.gov.in/content/sih/en/government-schemes/duediligence.html",
                description: "Due diligence resources"
            },
            {
                title: "Business Valuation",
                url: "https://www.icai.org/",
                description: "ICAI business valuation standards"
            }
        ]
    },

    "CRM Solutions": {
        name: "CRM Solutions",
        description: "Customer relationship management system implementation",
        icon: "👥",
        processingTime: "15-30 days",
        validity: "Ongoing service",
        eligibility: [
            "Business with customers",
            "Customer data management needs",
            "Sales process optimization",
            "Customer service improvement",
            "Team collaboration",
            "Data security compliance"
        ],
        documents: [
            "Business registration certificate",
            "Customer data structure",
            "Sales process documentation",
            "Team structure",
            "Integration requirements",
            "Security requirements",
            "Reporting needs",
            "Budget allocation"
        ],
        benefits: [
            "Improved customer relationships",
            "Sales process optimization",
            "Customer service enhancement",
            "Data-driven decisions",
            "Team collaboration",
            "Revenue growth"
        ],
        process: [
            {
                title: "Requirements Analysis",
                description: "Analyze business requirements and processes"
            },
            {
                title: "System Selection",
                description: "Select appropriate CRM system"
            },
            {
                title: "Customization",
                description: "Customize system for business needs"
            },
            {
                title: "Data Migration",
                description: "Migrate existing customer data"
            },
            {
                title: "Training & Support",
                description: "Provide training and ongoing support"
            }
        ],
        links: [
            {
                title: "CRM Solutions",
                url: "https://www.startupindia.gov.in/content/sih/en/government-schemes/crm-solutions.html",
                description: "Government CRM resources"
            },
            {
                title: "Data Security",
                url: "https://www.meity.gov.in/",
                description: "Ministry of Electronics and IT"
            },
            {
                title: "Business Software",
                url: "https://www.digitalindia.gov.in/",
                description: "Digital India business resources"
            }
        ]
    },

    // DISHA - Expansion & Marketing
    "Affordable Land": {
        name: "Affordable Land",
        description: "Business premises and land acquisition support",
        icon: "🏗️",
        processingTime: "30-60 days",
        validity: "One-time service",
        eligibility: [
            "Business expansion needs",
            "Land acquisition budget",
            "Location requirements",
            "Legal compliance",
            "Environmental clearance",
            "Zoning compliance"
        ],
        documents: [
            "Business registration certificate",
            "Financial statements",
            "Land requirements",
            "Location preferences",
            "Budget allocation",
            "Legal compliance certificates",
            "Environmental clearance",
            "Zoning certificates"
        ],
        benefits: [
            "Strategic location selection",
            "Cost-effective acquisition",
            "Legal compliance assurance",
            "Investment protection",
            "Business expansion",
            "Asset appreciation"
        ],
        process: [
            {
                title: "Requirements Analysis",
                description: "Analyze land requirements and budget"
            },
            {
                title: "Location Research",
                description: "Research suitable locations and properties"
            },
            {
                title: "Due Diligence",
                description: "Conduct legal and environmental due diligence"
            },
            {
                title: "Negotiation",
                description: "Negotiate terms and conditions"
            },
            {
                title: "Acquisition Support",
                description: "Support land acquisition process"
            }
        ],
        links: [
            {
                title: "Land Acquisition",
                url: "https://www.startupindia.gov.in/content/sih/en/government-schemes/land-acquisition.html",
                description: "Government land acquisition resources"
            },
            {
                title: "Industrial Land",
                url: "https://www.makeinindia.com/",
                description: "Make in India land resources"
            },
            {
                title: "Real Estate",
                url: "https://www.indiainvestmentgrid.gov.in/",
                description: "India Investment Grid"
            }
        ]
    },

    "Export Documentation": {
        name: "Export Documentation",
        description: "Complete export documentation and compliance",
        icon: "📦",
        processingTime: "7-15 days",
        validity: "Per shipment",
        eligibility: [
            "Valid IEC certificate",
            "Export business registration",
            "Product compliance",
            "Quality certifications",
            "Legal compliance",
            "Documentation requirements"
        ],
        documents: [
            "IEC certificate",
            "Export order",
            "Product specifications",
            "Quality certificates",
            "Packing list",
            "Commercial invoice",
            "Shipping bill",
            "Insurance documents"
        ],
        benefits: [
            "Legal compliance",
            "Smooth customs clearance",
            "Export incentives",
            "International market access",
            "Professional credibility",
            "Risk mitigation"
        ],
        process: [
            {
                title: "Document Preparation",
                description: "Prepare all required export documents"
            },
            {
                title: "Compliance Check",
                description: "Verify compliance with export regulations"
            },
            {
                title: "Customs Filing",
                description: "File shipping bill with customs"
            },
            {
                title: "Clearance Support",
                description: "Support customs clearance process"
            },
            {
                title: "Documentation Completion",
                description: "Complete all export documentation"
            }
        ],
        links: [
            {
                title: "DGFT Portal",
                url: "https://www.dgft.gov.in/",
                description: "Directorate General of Foreign Trade"
            },
            {
                title: "Export Documentation",
                url: "https://www.dgft.gov.in/CP/?opt=export-documentation",
                description: "Export documentation guide"
            },
            {
                title: "Customs Portal",
                url: "https://www.cbic.gov.in/",
                description: "Central Board of Indirect Taxes and Customs"
            }
        ]
    },

    "Market Research": {
        name: "Market Research",
        description: "Comprehensive market analysis and business insights",
        icon: "🔍",
        processingTime: "15-30 days",
        validity: "6-12 months",
        eligibility: [
            "Business or startup",
            "Market entry or expansion",
            "Clear research objectives",
            "Target market definition",
            "Competitive analysis needs",
            "Data collection requirements"
        ],
        documents: [
            "Business registration certificate",
            "Research objectives",
            "Target market details",
            "Competitor information",
            "Product/service details",
            "Budget allocation",
            "Timeline requirements",
            "Research methodology"
        ],
        benefits: [
            "Market insights",
            "Competitive advantage",
            "Informed decisions",
            "Risk mitigation",
            "Opportunity identification",
            "Strategic planning"
        ],
        process: [
            {
                title: "Research Planning",
                description: "Plan research methodology and objectives"
            },
            {
                title: "Data Collection",
                description: "Collect primary and secondary data"
            },
            {
                title: "Analysis",
                description: "Analyze collected data and trends"
            },
            {
                title: "Report Preparation",
                description: "Prepare comprehensive research report"
            },
            {
                title: "Recommendations",
                description: "Provide actionable recommendations"
            }
        ],
        links: [
            {
                title: "Market Research",
                url: "https://www.startupindia.gov.in/content/sih/en/government-schemes/market-research.html",
                description: "Government market research resources"
            },
            {
                title: "Industry Reports",
                url: "https://www.ibef.org/",
                description: "India Brand Equity Foundation"
            },
            {
                title: "Economic Data",
                url: "https://www.rbi.org.in/",
                description: "Reserve Bank of India"
            }
        ]
    },

    "Brand Development": {
        name: "Brand Development",
        description: "Complete brand identity and marketing strategy",
        icon: "🎯",
        processingTime: "20-40 days",
        validity: "Ongoing support",
        eligibility: [
            "Business or organization",
            "Brand development needs",
            "Clear brand vision",
            "Target audience definition",
            "Competitive positioning",
            "Marketing objectives"
        ],
        documents: [
            "Business registration certificate",
            "Brand vision and mission",
            "Target audience details",
            "Competitive analysis",
            "Brand positioning",
            "Marketing objectives",
            "Budget allocation",
            "Timeline requirements"
        ],
        benefits: [
            "Strong brand identity",
            "Market differentiation",
            "Customer loyalty",
            "Brand recognition",
            "Competitive advantage",
            "Revenue growth"
        ],
        process: [
            {
                title: "Brand Analysis",
                description: "Analyze current brand position and market"
            },
            {
                title: "Strategy Development",
                description: "Develop comprehensive brand strategy"
            },
            {
                title: "Identity Creation",
                description: "Create brand identity and guidelines"
            },
            {
                title: "Implementation",
                description: "Implement brand across all touchpoints"
            },
            {
                title: "Monitoring",
                description: "Monitor brand performance and optimize"
            }
        ],
        links: [
            {
                title: "Brand Development",
                url: "https://www.startupindia.gov.in/content/sih/en/government-schemes/brand-development.html",
                description: "Government brand development resources"
            },
            {
                title: "Trademark Registration",
                url: "https://www.ipindia.gov.in/",
                description: "Intellectual Property Office"
            },
            {
                title: "Marketing Resources",
                url: "https://www.digitalindia.gov.in/",
                description: "Digital India marketing resources"
            }
        ]
    },

    "E-commerce Setup": {
        name: "E-commerce Setup",
        description: "Complete online selling platform development",
        icon: "🛒",
        processingTime: "20-40 days",
        validity: "Ongoing maintenance",
        eligibility: [
            "Business or individual seller",
            "Product catalog ready",
            "Payment gateway requirements",
            "Shipping logistics",
            "Legal compliance",
            "Technical requirements"
        ],
        documents: [
            "Business registration certificate",
            "Product catalog",
            "Payment gateway details",
            "Shipping information",
            "Legal compliance certificates",
            "Technical requirements",
            "Design preferences",
            "Functionality requirements"
        ],
        benefits: [
            "24/7 online presence",
            "Global market access",
            "Reduced overhead costs",
            "Automated processes",
            "Customer analytics",
            "Revenue growth"
        ],
        process: [
            {
                title: "Platform Selection",
                description: "Select appropriate e-commerce platform"
            },
            {
                title: "Design & Development",
                description: "Design and develop online store"
            },
            {
                title: "Integration",
                description: "Integrate payment and shipping systems"
            },
            {
                title: "Testing",
                description: "Test all functionality and processes"
            },
            {
                title: "Launch & Support",
                description: "Launch store and provide ongoing support"
            }
        ],
        links: [
            {
                title: "E-commerce Setup",
                url: "https://www.startupindia.gov.in/content/sih/en/government-schemes/ecommerce-setup.html",
                description: "Government e-commerce resources"
            },
            {
                title: "Payment Gateways",
                url: "https://www.rbi.org.in/",
                description: "RBI payment gateway guidelines"
            },
            {
                title: "Digital Payments",
                url: "https://www.digitalindia.gov.in/",
                description: "Digital India payment resources"
            }
        ]
    },

    "Social Media Marketing": {
        name: "Social Media Marketing",
        description: "Comprehensive social media strategy and management",
        icon: "📲",
        processingTime: "7-14 days",
        validity: "Ongoing service",
        eligibility: [
            "Business or organization",
            "Social media presence needs",
            "Content creation capabilities",
            "Target audience on social media",
            "Marketing objectives",
            "Budget allocation"
        ],
        documents: [
            "Business registration certificate",
            "Social media objectives",
            "Target audience details",
            "Content preferences",
            "Brand guidelines",
            "Marketing budget",
            "Platform preferences",
            "Campaign requirements"
        ],
        benefits: [
            "Increased brand awareness",
            "Customer engagement",
            "Lead generation",
            "Cost-effective marketing",
            "Real-time feedback",
            "Viral potential"
        ],
        process: [
            {
                title: "Strategy Development",
                description: "Develop social media marketing strategy"
            },
            {
                title: "Content Creation",
                description: "Create engaging content and campaigns"
            },
            {
                title: "Platform Setup",
                description: "Set up and optimize social media accounts"
            },
            {
                title: "Campaign Launch",
                description: "Launch targeted social media campaigns"
            },
            {
                title: "Monitoring & Optimization",
                description: "Monitor performance and optimize campaigns"
            }
        ],
        links: [
            {
                title: "Social Media Marketing",
                url: "https://www.startupindia.gov.in/content/sih/en/government-schemes/social-media-marketing.html",
                description: "Government social media resources"
            },
            {
                title: "Facebook Business",
                url: "https://business.facebook.com/",
                description: "Facebook business platform"
            },
            {
                title: "Digital Marketing",
                url: "https://www.digitalindia.gov.in/",
                description: "Digital India marketing resources"
            }
        ]
    }
};

export default serviceDetails;
