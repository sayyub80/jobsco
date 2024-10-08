

export const recruiterOnboardFormControl=[
  
    
    {
        lable:'Name',
        name:'name',
        placeholder:'Enter your name',
        componentType:'input'
    },
    {
        lable:'Company Name',
        name:'companyName',
        placeholder:'Enter your company name',
        componentType:'input'
    },
    {
        lable:'Company Role',
        name:'companyRole',
        placeholder:'Enter your company role',
        componentType:'input'
    },
]



export const initialRecruiterFormData={
    name:'',
    companyName:'',
    companyRole:'',
    isPremiumUser:false
}



//candidate

export const candidateOnboardFormControl=[
    
    {
        lable:'Name',
        name:'name',
        placeholder:'Enter your name',
        componentType:'input'
    },
    {
        lable:'Current Company',
        name:'currentCompany',
        placeholder:'Enter your current company',
        componentType:'input'
    },
    {
        label:'Current Job Locaton',
        name:'currentJobLocation',
        placeholder:'Enter your current job location',
        componentType:'input'
    },
    {
        label:'Prefered Job Location',
        name:'preferdJobLocation',
        placeholder:'Enter your prefered job location',
        componentType:'input'
    },
    {
        lable:'Current Salary',
        name:'currentSalary',
        placeholder:'Enter your current salary',
        componentType:'input'
    },
    {
        lable:'Notice Period',
        name:'noticePeriod',
        placeholder:'Enter your notice period',
        componentType:'input'
    },
    {
       label:'Skills',
       name:'skills',
       placeholder:'Enter your skill',
       componentType:'input'
    },
    {
        label:'Previour Companies',
        name:'previousCompanies',
        placeholder:'Enter your previous companies',
        componentType:'input'
    },
    {
        label:'Total Experience',
        name:'totalExperience',
        placeholder:'Enter your total experience',
        componentType:'input'
    },
    {
        label:'Collage',
        name:'collage',
        placeholder:'Enter your collage',
        componentType:'input'

    },
    {
        label:'Collage Location',
        name:'collageLocation',
        placeholder:'Enter your collage location',
        componentType:'input'
    },
    {
        label:'Graduated Year',
        name:'graduatedYear',
        placeholder:'Enter your graduated year',
        componentType:'input'
    },
    {
        label:'Linkedin Profile',
        name:'linkedinProfile',
        placeholder:'Enter your linkedin profile',
        componentType:'input'
    },
    {
        label:'Github Profile',
        name:'githubProfile',
        placeholder:'Enter your github profile',
        componentType:'input'
    },
    {
        label: "Resume",
        name: "resume",
        componentType: "file",
    },
]


export const initialCandidateFormData ={
    name: "",
    currentCompany:"",
    currentJobLocation:"",
    preferdJobLocation:"",
    currentSalary:"",
    noticePeriod:"",
    totalExperience:"",
    skills:"",
    previousCompany:"",
    collage:"",
    collageLocation:"",
    graduatedYear:"",
    linkedinProfile:"",
    githubProfile:"",
    resume:"",
    isPremiumUser:false
}