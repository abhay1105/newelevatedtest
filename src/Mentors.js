import React from 'react'
import MentorCard from './components/MentorCard'

const Mentors = () => {
    return (
        <div className='mx-4 lg:mx-20 mt-4'>
            <div>
                <div className='pb-6'>
                    <p className='text-5xl font-semibold'>Our Mentors</p>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-6 mt-4 mb-10'>
                <MentorCard source="/mentorImages/abhay.png" name="Abhay Paidipalli" bio="Abhay is a rising senior at James B. Conant High School and the founder of Elevated Learning. He is passionate about helping others and wants to pursue a career in math and computer science. In his spare time, he plays jazz music on his tenor saxophone."></MentorCard>
                <MentorCard source="/mentorImages/soham.jpg" name="Soham Gupta" bio="Soham is a senior at James B. Conant High School. An aspiring computer scientist, he loves to work on math problems and computer science projects. He’s competed in various competitions such as the AMC and the Harvard-MIT math tournament. In his spare time you’ll find him working on projects, playing basketball, or watching movies."></MentorCard>
                <MentorCard source="/mentorImages/saksham.jpeg" name="Saksham Gupta" bio="Saksham is a rising senior at James B Conant High School, leader of Hack Club and the Co-Director of Elevated Learning. He has played varsity tennis for the past three years and is currently conducting research in data analysis."></MentorCard>
                <MentorCard source="/mentorImages/prisha.jpg" name="Prisha Mohan" bio="Prisha Mohan is currently a rising senior at James B. Conant High School, captain of the congressional debate team, and current president of SASA. Prisha also volunteers at Saint Alexian Brothers Medical Center and Friendship Village. Prisha is currently a Research Assistant at the University of Chicago since she plans to go into the medical field in the future."></MentorCard>
                <MentorCard source="/mentorImages/rady.png" name="Rady Kolev" bio="Rady is a senior at Conant High School. Looking to go into finance, he is exploring multiple business ventures. When he is not teaching kids in the classroom, you can find him at the tennis court, behind his computer, or at the gym."></MentorCard>
                <MentorCard source="/mentorImages/varshini.jpg" name="Varshini Medempudi" bio="Varshini is a senior at Schaumburg High School. She is a member of her school’s debate team, BPA chapter, Principal’s Advisory Board, badminton team, and more. She is excited to be a part of Elevated Learning and hopes to be a helpful mentor for the students."></MentorCard>
                <MentorCard source="/mentorImages/eesha.jpg" name="Eesha Desai" bio="Eesha is a rising junior at James B. Conant High School and junior captain of her school’s congressional debate team. She has worked with professors at ISU and Loyola University to explore numerous medical research experiences. In her spare time, you’ll find her volunteering at AAB hospital or playing tennis."></MentorCard>
                <MentorCard source="/mentorImages/ananya.JPG" name="Ananya Krishnan" bio="Ananya is a sophomore at Hoffman Estates High School. Her favorite hobby is soccer, which she has been playing for 9 years. She is on her school's debate, math, and trivia teams. She also participates in Hoffman's Business Professionals of America (BPA) club and went to state last year in Banking and Finance."></MentorCard>
                <MentorCard source="/mentorImages/anmay.jpg" name="Anmay Gupta" bio="Anmay is a rising senior at James B. Conant High School and is the captain of the congressional debate team, robotics club, and technology club. As an aspiring roboticist, he loves to build his own robots and design his own programs. In his spare time, you'll find him working on his 3D printer or working on projects."></MentorCard>
               
            </div>
        </div>
    )
}

export default Mentors