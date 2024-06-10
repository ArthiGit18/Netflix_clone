import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const FAQs = () => {
    const faqData = [
        {
            question: 'What is Netflix?',
            answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There is always something new to discover, and new TV shows and movies are added every week!'
        },
        {
            question: 'How much does Netflix cost?',
            answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.'
        },
        {
            question: 'Where can I watch?',
            answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you are on the go and without an internet connection. Take Netflix with you anywhere.'
        },
        {
            question: 'How do I cancel?',
            answer: 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
        },
        {
            question: 'What can I watch on Netflix?',
            answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
        },
        {
            question: 'Is Netflix good for kids?',
            answer: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.'
        }
    ];

    return (
        <div className="section_one_main">
            <h2 style={{ textAlign: "center", paddingBottom: "20px" }}>Frequently Asked Questions</h2>
            <div className="section4_wrapper">
                {faqData.map((faq, index) => (
                    <Accordion className='accordation' key={index}>
                        <AccordionSummary
                            className='accordation_summary'
                            expandIcon={<AddIcon style={{ color: "white", fontSize: "3rem" }} />}
                            aria-controls={`panel${index + 1}-content`}
                            id={`panel${index + 1}-header`}
                        >
                            {faq.question}
                        </AccordionSummary>
                        <AccordionDetails className='accordation_details'>
                            {faq.answer}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>

            <div className='email_hero' style={{textAlign: "center"}}>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="email_div">
                    <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <input required />
                            <p className="omrs-input-label">Email Address</p>
                        </label>
                    </div>
                    <button role="button" className='email_hero_button'>Get Started <KeyboardArrowRightIcon /></button>
                </div>
            </div>
        </div>
    );
}

export default FAQs;
