'use client'

import React, { useState } from 'react'
import { H1, H5, P } from '../global/Typography'
import Accordion from '../global/Accordion'

const faqData = [

	{
		name: "Does Fumiwo collect personal data from the smartphone?",
		description: "No. We only collect metadata that are anonymized. The collection of the data requires express consent of the borrower after the user has granted the access through its Operating System's permissions.",
	},
	{
		name: "Where will the data be stored?",
		description: "The collected data is stored in France on a secure clouded or in local server depending on our client's and country's policy and regulation?",
	},
	{
		name: "What is the pricing of your services?",
		description: "We are pay as you use service with upfront fees to access our license for 12 months. For more details please contact our sales team through the form.",
	},
	{
		name: "What is your onboarding process?",
		description: `
			Fumiwo's onboarding process include:\n
				Understanding your objectives and challenges
				Signing of NDA
				Presenting proposed solution
				Finalizing terms and conditions
				Signing commercial contract
				Launching data collection
				Developing digital scorecard
				Redesigning underwriting process (after assessing outcomes).
		`
	},



	// {
	// 	name: 'How Involved Will I Be In The Development Process?',
	// 	description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
	// },
	// {
	// 	name: 'What Sets Your Agency Apart From Others In The Industry?',
	// 	description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
	// },
	// {
	// 	name: 'What Level Of Support The Software Launch?',
	// 	description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
	// },
];

const FAQ = () => {
	const [selected, setSelected] = useState('')

	return (
		<section className='grid lg:flex max-w-6xl mx-auto pb-36 mt-28 px-6'>
			<div className=' flex-1 mb-10 lg:mb-0 text-center lg:text-left'>
				<H1 className=' lg:w-80 !leading-[58px]'>
					Frequently Asked  Questions
				</H1>
			</div>


			<div className='flex-1'>
				{faqData.map((item, index) => (
					<Accordion
						key={index}
						name={item.name}
						selected={selected}
						setSelected={setSelected}
					>
						<P className='!text-sm md:!text-sm mt-5'>
							{item.description}
						</P>
					</Accordion>
				))}
			</div>
		</section>
	)
}

export default FAQ