import React from 'react'
import MentorCard from './components/MentorCard'

const Mentors = () => {
    return (
        <div className='mx-4 lg:mx-20 mt-4 lg:mt-10'>
            <div>
                <div className='bg-main py-4 px-8'>
                    <p className='text-4xl font-semibold'>Our Mentors</p>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-10 mt-4 mb-10'>
                <MentorCard source="/mentorImages/abhay.png" name="Abhay Paidipalli" bio="Abhay is a rising senior at James B. Conant High School and the founder of Elevated Learning. He is passionate about helping others and wants to pursue a career in math and computer science. In his spare time, he plays jazz music on his tenor saxophone."></MentorCard>
                <MentorCard source="/mentorImages/ananya.JPG" name="Ananya Krishnan" bio="Ananya is a sophomore at Hoffman Estates High School. Her favorite hobby is soccer, which she has been playing for 9 years. She is on her school's debate, math, and trivia teams. She also participates in Hoffman's Business Professionals of America (BPA) club and went to state last year in Banking and Finance."></MentorCard>
                <MentorCard source="/mentorImages/prisha.jpg" name="Prisha Mohan" bio="Prisha Mohan is currently a rising senior at James B. Conant High School where she is a co-founder of Mentoring Young Minds, captain of the congressional debate team, and current president of SASA. Outside of school, Prisha volunteers at Saint Alexian Brothers Medical Center and Friendship Village. She is also a part of the non-profits: USKIDS4WATER and Village Book Builders. Prisha is currently a Research Assistant at the University of Chicago since she plans to go into the medical field in the future."></MentorCard>
                <MentorCard source="/mentorImages/varshini.jpg" name="Varshini Medempudi" bio=""></MentorCard>
                <MentorCard source="/mentorImages/soham.jpg" name="Soham Gupta" bio="Soham is a senior at James B. Conant High School. An aspiring computer scientist, he loves to work on math problems and computer science projects. He’s competed in various competitions such as the AMC and the Harvard-MIT math tournament. In his spare time you’ll find him working on projects, playing basketball, or watching movies."></MentorCard>
            </div>
        </div>
    )
}

export default Mentors