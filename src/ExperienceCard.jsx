import Button from "@mui/material/Button";
import Aravind_Resume from "./assets/Aravind_Resume.pdf"

function ExperienceCard({year, workTitle, company, description = []}){
    return(
        <>
          <div className ='work-title-container'>
            <h3>{year}</h3>
            <h4>{workTitle}</h4>
            <p>{company}</p>
          </div>
          <div className ='work-description-container'>
            <ul className ='work-description-list'>
                {description.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
          <div className="download-button">
            <Button 
            type='download' 
            href={Aravind_Resume} 
            download 
            sx={{
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                padding: '10px 25px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                '&:hover':{
                    transform: 'translateY(-2px)',
                    backgroundColor: '#0044ffff'
                }
            }}
            disableTouchRipple>View Resume</Button>
          </div>      
        </>
    )
}

export default ExperienceCard;