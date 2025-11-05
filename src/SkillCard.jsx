function SkillCard({title, items}){
    return(
        <>
            <div className = 'skill-card'>
                <h3>{title}</h3>
                <ul>
                    {items.map((item, index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>*(Actively Learning)</p>
            </div>
        </>
    )
}

export default SkillCard;