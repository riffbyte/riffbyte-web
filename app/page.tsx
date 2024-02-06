import { Tilt_Warp } from 'next/font/google';
import Image from 'next/image';

import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/icons';
import { ButtonLink } from '@/components/ui/Button';
import avatar from '@/public/avatar.png';
import clsx from 'clsx';

const displayFont = Tilt_Warp({ subsets: ['latin'], weight: '400' });

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col items-center text-center gap-8">
                <Image
                    className="rounded-full w-full max-w-64"
                    alt="Photo"
                    src={avatar}
                    width={256}
                    height={256}
                    priority
                />

                <h1 className={clsx(displayFont.className, 'text-5xl font-bold tracking-wide')}>
                    Oleg Semyonov
                </h1>

                <h2 className="text-lg opacity-70">
                    Full Stack Developer <span className="block">based in Tbilisi, Georgia</span>
                </h2>

                <ul className="flex items-center justify-center gap-4">
                    <li>
                        <ButtonLink
                            size="icon"
                            variant="outline"
                            href="https://twitter.com/riffbyte"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <TwitterIcon className="w-full h-full" />{' '}
                            <span className="sr-only">Twitter</span>
                        </ButtonLink>
                    </li>
                    <li>
                        <ButtonLink
                            size="icon"
                            variant="outline"
                            href="https://github.com/riffbyte"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon className="w-full h-full" />{' '}
                            <span className="sr-only">GitHub</span>
                        </ButtonLink>
                    </li>
                    <li>
                        <ButtonLink
                            size="icon"
                            variant="outline"
                            href="https://www.linkedin.com/in/riffbyte/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon className="w-full h-full" />{' '}
                            <span className="sr-only">LinkedIn</span>
                        </ButtonLink>
                    </li>
                </ul>

                <ButtonLink size="lg" href="https://cv.riffbyte.dev">
                    See my Résumé
                </ButtonLink>
            </div>
        </main>
    );
}
