import React from 'react'
import { Gradient } from './gradient'
import { Container } from './container'
import { Button } from './button'

import { Navbar } from './navbar'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="relative">
            <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
            <Container className="relative">
                <Navbar />
                <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
                    <h1 className="text-4xl/[0.9] font-caveatBold tracking-tight text-gray-950 sm:text-6xl/[0.8] max-w-4xl md:text-8xl/[0.8]">
                    Unleash Your Entrepreneurial Potential 
                    </h1>
                    <p className="mt-8 max-w-3xl text-lg/7 font-caveatBold text-gray-950/75 sm:text-2xl/8">
                    The Federation of Industrial Education (FIE), in collaboration with GIMS, Greater Noida/Delhi-NCR, proudly announces the launch of Venture-I 1.0, an Entrepreneurship Development Boot Camp.
                    </p>
                    <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                        <Link to="/register"><Button>Register Now</Button></Link>
                        <Button variant="secondary" href="/pricing">
                            Know More
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Hero