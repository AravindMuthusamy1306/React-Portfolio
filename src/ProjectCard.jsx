import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import Chip from '@mui/material/Chip';

function ProjectCard({ icon, title, description, items = [], projectURL, demoURL}){
    return(
        <>
        <div className = 'project-card'>
            <div className = 'img-container'>
                {icon}
            </div>
            <div className = 'project-details'>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                    {items.map((item, index)=>(
                        <Chip
                            key={index}
                            label={item}
                            variant='filled'
                            size='large'
                            sx={{ margin: '5px',
                                  backgroundColor: '#1d4ed8',
                                  color: 'white',
                                  fontWeight: 'bold'
                             }}
                        />
                        ))}
                </ul>
                <div className = 'links-container'>
                    <a href={projectURL} target="_blank"><GitHubIcon fontSize='small'></GitHubIcon>GitHub</a>
                    <a href={demoURL} target="_blank"><LinkIcon></LinkIcon>Live Demo</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProjectCard;