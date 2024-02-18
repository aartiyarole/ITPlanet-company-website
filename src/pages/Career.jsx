import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection';
export default function Career() {
  const breadcrumbItems = [
    { text: 'Home', link: '/' },
    { text: 'Join Our Team at IT Planet Software Solution' }
  ];
  const workBenefits = [
    {
      title: "Innovative Projects",
      description: "Join us in working on exciting and challenging projects that leverage the latest technologies to solve real-world problems."
    },
    {
      title: "Collaborative Environment",
      description: "Be part of a supportive and inclusive team that values collaboration, communication, and diversity."
    },
    {
      title: "Career Growth",
      description: "We're committed to helping our employees reach their full potential. Whether you're just starting your career or looking to advance to the next level, we provide opportunities for growth and development."
    },
    {
      title: "Work-Life Balance",
      description: "We understand the importance of maintaining a healthy work-life balance. Enjoy flexible work hours and remote work options that allow you to prioritize your well-being."
    },
    {
      title: "Competitive Benefits",
      description: "We offer competitive salaries, comprehensive health benefits, and other perks to ensure our employees feel valued and rewarded for their contributions."
    }
  ];

  const jobOpenings = [
    {
      title: "Software Developer",
      description: "We're looking for experienced software developers to join our team and help us build innovative solutions for our clients."
    },
    {
      title: "UI/UX Designer",
      description: "Are you passionate about creating intuitive and visually stunning user experiences? Join us as a UI/UX designer and help us design cutting-edge interfaces for web and mobile applications."
    },
    {
      title: "Digital Marketing Specialist",
      description: "Join our marketing team and help us drive engagement, attract new clients, and elevate our brand presence through strategic digital marketing initiatives."
    }
  ];

  return (
    <>
    <BreadcrumbSection title="Join Our Team at IT Planet Software Solution" breadcrumbItems={breadcrumbItems}/>
    <div className="partnership-area mb-120 pt-80" id="partnership-section">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-12 p-2">
            <div className="card">
              <div className="card-body p-3">
                <p>
                  At IT Planet Software Solution, we're dedicated to pushing the boundaries of technology and delivering innovative solutions to our clients. We believe in fostering a culture of creativity, collaboration, and continuous learning, where every team member has the opportunity to grow and thrive.
                </p>

                <h2>Why Work With Us</h2>
                <ul>
                  {workBenefits.map((benefit, index) => (
                    <li key={index}>
                      <strong>{benefit.title}:</strong> {benefit.description}
                    </li>
                  ))}
                </ul>

                <h2>Current Openings</h2>
                <p>Join us in shaping the future of technology! Check out our current job openings below:</p>
                <ul>
                  {jobOpenings.map((job, index) => (
                    <li key={index}>
                      <strong>{job.title}:</strong> {job.description}
                    </li>
                  ))}
                </ul>

                <h2>How to Apply</h2>
                <p>
                  To apply for any of our current openings or to express your interest in joining our team, please send your resume and cover letter to{' '}
                  <a href="mailto:career@itplanet.in">career@itplanet.in</a>. Be sure to include the position you're applying for in the subject line.
                </p>

                <p>We look forward to welcoming you to the IT Planet Software Solution family!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}