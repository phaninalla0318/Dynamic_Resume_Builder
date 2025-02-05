

const selected_template = localStorage.getItem("selectedTemplate");
let resumeData;
let user_id;


document.getElementById('resumeForm').addEventListener('submit', function (event) {
  event.preventDefault();


resumeData = {
  name: document.getElementById('name').value,
  email: document.getElementById('email').value,
  phone: document.getElementById('phone').value,
  website: document.getElementById('website').value,
  degree: document.getElementById('degree').value,
  college: document.getElementById('college').value,
  startYear: document.getElementById('StartYear').value,
  endYear: document.getElementById('EndYear').value,
  jobTitle: document.getElementById('jobTitle').value,
  company: document.getElementById('company').value,
  startDate: document.getElementById('startingYear').value,
  endDate: document.getElementById('endingYear').value,
  skills: document.getElementById('skills').value,
  projects: document.getElementById('projects').value,
  certifications: document.getElementById('certifications').value,
  languages: document.getElementById('languages').value,
  hobbies: document.getElementById('hobbies').value,
  references: document.getElementById('references').value,
  

};

// console.log("resumeData---->",resumeData)




const templates = {
  1: (data) => `
    <div style="font-family: Arial, sans-serif; width: 208mm; height: 227mm; padding: 5mm; box-sizing: border-box; border: 1px solid #ddd; background: #fff;">
       <div style="max-width: 1000px; margin: auto; background: white; border-radius: 10px; box-shadow: 0 4px 10px rgba(230, 215, 212, 0.2); overflow: hidden; display: flex;">

        <!-- Left Column -->
        <div style="width: 35%; background:rgb(211, 223, 44); color: white; padding: 20px;">
            <!-- Profile Picture Placeholder -->
            <div style="background: white; height: 120px; width: 120px; border-radius: 50%; margin: 20px auto; display: flex; align-items: center; justify-content: center; font-size: 1.5em; color: #2c3e50;">
                VS
            </div>
            <h2 style="text-align: center; style="font-size: 0.9em; margin: 5px 0;">${data.name}</h2>
            <p style="text-align: center; font-size: 0.9em; margin-bottom: 20px;">${data.jobTitle}</p>

            <div style="margin-bottom: 20px;">
                <h3 style="border-bottom: 2px solid #ecf0f1; padding-bottom: 5px;">Contact</h3>
                <p style="font-size: 0.9em; margin: 5px 0;">${data.phone}</p>
                <p style="font-size: 0.9em; margin: 5px 0;">${data.email}</p>
                <p style="font-size: 0.9em; margin: 5px 0;">${data.website}</p>
            </div>

            <div style="margin-bottom: 20px;">
                <h3 style="border-bottom: 2px solid #ecf0f1; padding-bottom: 5px;">Languages</h3>
                <p style="font-size: 0.9em; margin: 5px 0;">${data.languages}</p>

            </div>

            <div>
                <h3 style="border-bottom: 2px solid #ecf0f1; padding-bottom: 5px;">Hobbies</h3>
                <p style="font-size: 0.9em; margin: 5px 0;">${data.hobbies}</p>
            </div>
        </div>

        <!-- Right Column -->
        <div style="width: 65%; padding: 20px;">
            <div style="margin-bottom: 20px;">
                <h2 style="color: #2c3e50; border-bottom: 2px solid #2c3e50; display: inline-block;">Education</h2>
                <p style="margin: 10px 0; font-size: 0.95em;">${data.degree}</p>
                <p style="margin: 10px 0; font-size: 0.95em;">${data.college}</p>
                <p style="margin: 10px 0; font-size: 0.95em;">${data.startYear}</p>
                <p style="margin: 10px 0; font-size: 0.95em;">${data.endYear}</p>
            </div>

            <div style="margin-bottom: 20px;">
                <h2 style="color: #2c3e50; border-bottom: 2px solid #2c3e50; display: inline-block;">Skills</h2>
                <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
                    <div style="background: #3498db; color: white; padding: 5px 15px; border-radius: 20px;">${data.skills}</div>
                    
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <h2 style="color: #2c3e50; border-bottom: 2px solid #2c3e50; display: inline-block;">Experience</h2>
                <p style="margin: 10px 0; font-size: 0.95em;">${data.jobTitle}</p>
                <p style="margin: 10px 0; font-size: 0.95em;">${data.company}</p>
                <p style="margin: 10px 0; font-size: 0.95em;">${data.startDate}</p>
                <p style="margin: 10px 0; font-size: 0.95em;">${data.endDate}</p>
            </div>

            <div style="margin-bottom: 20px;">
                <h2 style="color: #2c3e50; border-bottom: 2px solid #2c3e50; display: inline-block;">Projects</h2>
                <p style="margin: 10px 0; font-size: 0.95em;">${data.projects}</p>
            </div>

            <div style="margin-bottom: 20px;">
                <h2 style="color: #2c3e50; border-bottom: 2px solid #2c3e50; display: inline-block;">Certifications</h2>
                <p style="margin: 10px 0; font-size: 0.95em;">${data.certifications}</p>
            </div>

            <div>
                <h2 style="color: #2c3e50; border-bottom: 2px solid #2c3e50; display: inline-block;">References</h2>
                <p style="margin: 10px 0; font-size: 0.95em;">${data.references}</p>
            </div>
        </div>
    </div>
      
  `,
  2: (data) => `
    <div style="font-family: Arial, sans-serif; width: 208mm; height: 227mm; padding: 5mm; box-sizing: border-box; border: 1px solid #ddd; background: #fff;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px;">
    <div>
      <h1 style="margin: 0; font-size: 28px; font-weight: bold;">${data.name.toUpperCase()}</h1>
      <p style="margin: 5px 0; font-size: 16px; color: #555;">${data.jobTitle}</p>
    </div>
    <div style="text-align: right; font-size: 14px; color: #555;">
      <p style="margin: 2px 0;">Phone: ${data.phone}</p>
      <p style="margin: 2px 0;">Email: ${data.email}</p>
      <p style="margin: 2px 0;">Website: ${data.website || ''}</p>
    </div>
  </div>

  <!-- Left Column -->
  <div style="display: flex;">
    <div style="width: 35%; padding-right: 20px; border-right: 2px solid #000;">
      <!-- Education Section -->
      <section style="margin-bottom: 20px;">
        <h2 style="font-size: 16px; font-weight: bold; margin-bottom: 10px;">EDUCATION</h2>
        <p>
          <strong>${data.degree}</strong> from ${data.college}
        </p>
        <p>Starting Year: ${data.startYear}</p>
        <p>Ending Year: ${data.endYear}</p>
      </section>

      <!-- Skills Section -->
      <section style="margin-bottom: 20px;">
        <h2 style="font-size: 16px; font-weight: bold; margin-bottom: 10px;">SKILLS</h2>
        <p>${data.skills}</p>
      </section>

      <!-- Projects Section -->
      <section style="margin-bottom: 20px;">
        <h2 style="font-size: 16px; font-weight: bold; margin-bottom: 10px;">PROJECTS</h2>
        <p>${data.projects}</p>
      </section>

      <!-- Certifications Section -->
      <section style="margin-bottom: 20px;">
        <h2 style="font-size: 16px; font-weight: bold; margin-bottom: 10px;">CERTIFICATIONS</h2>
        <p>${data.certifications}</p>
      </section>

      <!-- Languages Section -->
      <section style="margin-bottom: 20px;">
        <h2 style="font-size: 16px; font-weight: bold; margin-bottom: 10px;">LANGUAGES</h2>
        <p>${data.languages}</p>
      </section>

      <!-- Hobbies Section -->
      <section style="margin-bottom: 20px;">
        <h2 style="font-size: 16px; font-weight: bold; margin-bottom: 10px;">HOBBIES</h2>
        <p>${data.hobbies}</p>
      </section>
    </div>

    <!-- Right Column -->
    <div style="width: 65%; padding-left: 20px;">
      <!-- Experience Section -->
      <section style="margin-bottom: 20px;">
        <h2 style=" font-size: 16px; font-weight: bold; margin-bottom: 10px;">EXPERIENCE</h2>
        <p><strong>${data.jobTitle}</strong> at ${data.company} (${data.startDate} - ${data.endDate})</p>
        <p>${data.description}</p>
      </section>

      <!-- References Section -->
      <section style="margin-top: 20px;">
        <h2 style="font-size: 16px; font-weight: bold; margin-bottom: 10px;">REFERENCES</h2>
        <p>${data.references}</p>
      </section>
    </div>
  </div>
    </div>
  `,
  3: (data) => `
    <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f9;">
      <div style="width: 80%; margin: 20px auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <div style="text-align: center; border-bottom: 2px solid #cccccc; padding-bottom: 10px;">
        <h1 style="font-size: 2em; color: #333333;">${data.name}</h1>
        <p style="font-size: 1em; color: #666666;">${data.jobTitle} | Phone: ${data.phone} | Email: ${data.email} | Website: ${data.website}</p>
    </div>

    <div style="margin-top: 20px;">
        <div>
            <h2 style="font-size: 1.2em; color: #444444; border-bottom: 1px solid #cccccc; padding-bottom: 5px;">Education</h2>
            <p style="margin: 5px 0; color: #555555;">${data.degree}</p>
            <p style="margin: 5px 0; color: #555555;">${data.college}</p>
            <p style="margin: 5px 0; color: #555555;">${data.startYear}</p>
            <p style="margin: 5px 0; color: #555555;">${data.endYear}</p>
        </div>

        <div style="margin-top: 20px;">
            <h2 style="font-size: 1.2em; color: #444444; border-bottom: 1px solid #cccccc; padding-bottom: 5px;">Skills</h2>
            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                <div style="background: #007BFF; color: #ffffff; padding: 5px 10px; border-radius: 5px; font-size: 0.9em;">${data.skills}</div>
                
            </div>
        </div>

        <div style="margin-top: 20px;">
            <h2 style="font-size: 1.2em; color: #444444; border-bottom: 1px solid #cccccc; padding-bottom: 5px;">Experience</h2>
            <p style="margin: 5px 0; color: #555555;">${data.jobTitle} at ${data.company} (${data.startDate}- ${data.endDate})</p>
        </div>

        <div style="margin-top: 20px; display: flex; justify-content: space-between;">
            <div style="width: 48%;">
                <h2 style="font-size: 1.2em; color: #444444; border-bottom: 1px solid #cccccc; padding-bottom: 5px;">Projects</h2>
                <p style="margin: 5px 0; color: #555555;">${data.projects}</p>
            </div>
            <div style="width: 48%;">
                <h2 style="font-size: 1.2em; color: #444444; border-bottom: 1px solid #cccccc; padding-bottom: 5px;">Certifications</h2>
                <p style="margin: 5px 0; color: #555555;">${data.certifications}</p>
            </div>
        </div>

        <div style="margin-top: 20px; display: flex; justify-content: space-between;">
            <div style="width: 48%;">
                <h2 style="font-size: 1.2em; color: #444444; border-bottom: 1px solid #cccccc; padding-bottom: 5px;">Languages</h2>
                <p style="margin: 5px 0; color: #555555;">${data.languages}</p>
            </div>
            <div style="width: 48%;">
                <h2 style="font-size: 1.2em; color: #444444; border-bottom: 1px solid #cccccc; padding-bottom: 5px;">Hobbies</h2>
                <p style="margin: 5px 0; color: #555555;">${data.hobbies}</p>
            </div>
        </div>

        <div style="margin-top: 20px;">
            <h2 style="font-size: 1.2em; color: #444444; border-bottom: 1px solid #cccccc; padding-bottom: 5px;">References</h2>
            <p style="margin: 5px 0; color: #555555;">${data.references}</p>
        </div>
    </div>
</div>
    </div>
  `,
};

const selectedTemplate = templates[selected_template];
const resumeContent = selectedTemplate(resumeData);
document.getElementById('resumeContent').innerHTML = resumeContent;
document.getElementById('resume').style.display = 'block';
document.getElementById('resume').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('downloadResume').addEventListener('click', async function () {
document.getElementById('downloadResume').style.display = 'none';
const pdfname = document.getElementById('pdfname').value

const saveToDatabase = async () => {
  const element = document.getElementById('resumeContent'); 
  const resume = {
    "user_id": `${user_id}`,
    "pdfname":`${pdfname}.pdf`,
    personal_info:{
      name:resumeData.name,
      email:resumeData.email,
      phone:resumeData.phone,
      website:resumeData.website
    },
    Education:{
      degree:resumeData.degree,
      college:resumeData.college,
      startYear:resumeData.startYear,
      endYear:resumeData.endYear
    },
    WorkExperience:{
      jobTitle:resumeData. jobTitle,
      company:resumeData.company,
      startDate:resumeData.startDate,
      endDate:resumeData.endDate
    },
    Skills:{
      skills:resumeData.skills
    },
    Projects:{
      projects:resumeData.projects
    },
    Certifications:{
      certifications:resumeData.certifications
    },
    Languages:{
      languages:resumeData.languages
    },
    Hobbies:{
      hobbies:resumeData.hobbies
    },
    References:{
      references:resumeData.references
    },
    
    
  }
  const options = {
   
    filename: `${pdfname}.pdf`,
    jsPDF :{unit:'pt',format:'letter',orientation:'portrait'}
   
    
  };
  const pdfBlob = await html2pdf().set(options).from(element).outputPdf('blob')
  console.log("pdfBlob",pdfBlob)
  const formData = new FormData()
  formData.append("files", pdfBlob , `${pdfname}.pdf`);
  console.log(user_id)
  
  formData.append("user_id",user_id);
  formData.append("resume",JSON.stringify(resume));
   
  try {
    const response = await fetch('http://localhost:8472/resume/saveresume', {
      method: 'POST',
      body:formData,
    });

    const result = await response.json();

    if (response.ok) {
      window.location.href = 'home.html';
      console.log('Resume details saved:', result);
      alert('Resume saved sucessfully.');
      

    } else {
      console.error('Failed to save resume details:', result);
      alert('Error saving resume details. Please try again.');
    }
  } catch (error) {
    console.error('Error during API call:', error);
    alert('An error occurred. Please try again later.');
  }
  
};








const downloadPDF = () => {
const element = document.getElementById('resumeContent'); 
html2pdf().from(element).save(pdfname); 

};

await Promise.all([saveToDatabase(), downloadPDF()]);
window.location.href = 'home.html';

});

document.addEventListener("DOMContentLoaded", () => {
user_id = sessionStorage.getItem("user_id"); 


});

document.addEventListener("DOMContentLoaded", () => {
const user_id = sessionStorage.getItem("user_id"); 
prefillForm(user_id);


async function prefillForm(user_id) {
try {
    const response =  await fetch(`http://127.0.0.1:8472/resume/resumes/?user_id=${user_id}`);
    if (response.ok) {
        const resume = await response.json();
        const details = resume[0];
        console.log(details)
        document.getElementById("name").value = details.personal_info.name || "";
        document.getElementById("email").value = details.personal_info.email || "";
        document.getElementById("phone").value = details.personal_info.phone || "";
        document.getElementById('website').value =details.personal_info.website || "";
        document.getElementById('degree').value= details.Education.degree || "";
        document.getElementById('college').value= details.Education.college || "";
        document.getElementById('StartYear').value= details.Education.startYear || "";
        document.getElementById('EndYear').value= details.Education.endYear || "";
        document.getElementById('jobTitle').value= details.WorkExperience.jobTitle || "";
        document.getElementById('company').value= details.WorkExperience.company || "";
        document.getElementById('startingYear').value= details.WorkExperience.startDate || "";
        document.getElementById('endingYear').value= details.WorkExperience.endDate || "";
        document.getElementById('skills').value= details.Skills.skills || "";
        document.getElementById('projects').value= details.Projects.projects || "";
        document.getElementById('certifications').value= details.Certifications.certifications || "";
        document.getElementById('languages').value= details.Languages.languages || "";
        document.getElementById('hobbies').value= details.Hobbies.hobbies || "";
        document.getElementById('references').value= details.References.references || "";
        
    } else {
        console.error("No data found for this user.",error);
    }
} catch (error) {
    console.error("Error fetching user data:", error);
}
}});