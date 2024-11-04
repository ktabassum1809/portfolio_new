import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Experiencedata from './Experiencedata'; 


const timelineStyles = {
  contentStyle: { background: 'rgb(16, 23, 37)', color: 'rgb(152, 155, 161)',borderRadius: '10px',padding: '35px',
  border: '0.1px solid #306EE8',
    boxShadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px'},
  contentArrowStyle: { borderRight: '7px solid #f4f4f9' },
  iconStyle: { background: '#6c63ff', color: '#fff' },
};

function ExperienceTimeline() {
  return (
    <div id="experience" style={{marginBottom:"50px"}}>
      <h2 style={{ textAlign: 'center', margin: '25px 0' ,color:"white"}}>Experience</h2>
      <p style={{ textAlign: 'center', margin: '0 0 25px',color:"rgb(152, 155, 161)",fontSize: "18px" }}>
        Below is a summary of my key roles and accomplishments, showcasing a diverse background in software development, system testing, and IT instruction.
      </p>

      <VerticalTimeline>
        {Experiencedata.map((data) => (
          <VerticalTimelineElement
            key={data.id}
            date={data.date}
            iconStyle={timelineStyles.iconStyle}
            contentStyle={timelineStyles.contentStyle}
            contentArrowStyle={timelineStyles.contentArrowStyle}
            icon={<img src={data.img} alt={`${data.company} logo`} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
          >
            <h3 style={{ fontStyle: 'italic',marginBottom: '8px',  color: `${({ theme }) => theme.text_primary + 99} `,fontSize:'15px'}}>{data.role}</h3>
            <h4 style={{ marginBottom: '8px',fontSize:'14px' }}>{data.company}</h4>
            <p style={{ fontSize:'14px' }}>{data.date}</p>

            {data.desc && (
              <ul style={{fontSize:'13px'}}>
                {data.desc.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            {data.skills && (
              <div style={{ marginTop: '10px' }}>
                <strong>Skills:</strong>
                <ul style={{ paddingLeft: '20px',listStyle: 'none',fontSize:'12px' }}>
                  {data.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceTimeline;
