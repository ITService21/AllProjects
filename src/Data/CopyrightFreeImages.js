// Copyright-free images from Pixabay and Pexels
// All images are free for commercial use without attribution required

export const copyrightFreeImages = {
    // Business and Startup Images
    businessSetup: [
        "https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg",
        "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/29/03/53/office-1867614_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_1280.jpg"
    ],
    
    // Funding and Finance Images
    funding: [
        "https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg",
        "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/29/03/53/office-1867614_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_1280.jpg"
    ],
    
    // Marketing Images
    marketing: [
        "https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg",
        "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/29/03/53/office-1867614_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_1280.jpg"
    ],
    
    // Legal and Compliance Images
    legal: [
        "https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg",
        "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/29/03/53/office-1867614_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_1280.jpg"
    ],
    
    // Team and Office Images
    team: [
        "https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg",
        "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/29/03/53/office-1867614_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_1280.jpg"
    ],
    
    // Gallery Images
    gallery: [
        "https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg",
        "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/29/03/53/office-1867614_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_1280.jpg",
        "https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/29/08/41/mobile-phone-1869510_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg",
        "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg"
    ]
};

// Function to get random image from category
export const getRandomImage = (category) => {
    const images = copyrightFreeImages[category] || copyrightFreeImages.businessSetup;
    return images[Math.floor(Math.random() * images.length)];
};

// Function to get specific image by index
export const getImageByIndex = (category, index) => {
    const images = copyrightFreeImages[category] || copyrightFreeImages.businessSetup;
    return images[index % images.length];
};
