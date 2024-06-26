import Image from 'next/image'
import React from 'react'
import { PrimaryButton } from '../global/Buttons'
import Divider from '../global/Divider'
import heroImage from '@images/hero-laptop.png'
import landingHero from '@images/landing-hero.png'
import partners from '@images/partners.png'

const Hero = () => {
	return (
		<section className='bg-primaryBlack px- text-white md:py-14 py-5 overflow-hidden'>

			<div className='flex gap-4 justify-between items-center px-4 container lg:pl- mx-auto'>
				<div className='px-2 md:px-0 xl:text-left text-center space-y-4 '>
					<h2 className='font-bold text-4xl  xl:mr-3 mr-0 md:text-5xl leading-[57px] md:leading-[78px] text-offWhite'>Assess creditworthy borrowers
						using <span className='text-primaryGreen underline'>behavioral analytics</span>
					</h2>
					<h5 className='text-linkGray leading-8'>
						Score confidently borrowers based on alternative smartphone data and unlock new market opportunities for your lending business
					</h5>
					<Divider height={16} />
					<PrimaryButton className='mx-auto mxl:mx-0'>
						Book a demo
					</PrimaryButton>
				</div>
				<div className='xl:flex hidden '>
					<Image
						src={landingHero}
						alt='hero'
						className='max-w-2xl pl-5'
					/>
				</div>
			</div>

			<Divider height={100} />

			<div className='text-center w-fit mx-auto font-semibold md:text-2xl '>
				<h6>
					Trusted by leading global finance partners
				</h6>
				<Divider height={36} />
				<Image
					src={partners}
					alt='partners'
				/>
			</div>
			<Divider height={40} />
		</section>
	)
}

export default Hero