import Link from 'next/link'
import type { FC } from 'react'
import 'twin.macro'
import tw, { styled } from 'twin.macro'

const StyledIconLink = styled(Link)(() => [
  tw`opacity-90 transition-all hover:(-translate-y-0.5 opacity-100)`,
])

export const HomePageTitle: FC = () => {
  const title = 'Paltalabs Challenge - Tomás Opazo'
  const desc = 'My submission for the Paltalabs Challenge. A simple Dapp to interact with a smart contract on the Stellar network.'
  const githubHref = 'https://github.com/paltalabs/create-soroban-dapp/'

  return (
    <>
      <div tw="flex flex-col items-center text-center font-mono">
        {/* Logo & Title */}
        <Link
          href={githubHref}
          target="_blank"
          className="group"
          tw="flex cursor-pointer items-center gap-4 rounded-3xl py-1.5 px-3.5 transition-all hover:bg-gray-900"
        >
          {/* <Image src={inkathonLogo} priority width={60} alt="ink!athon Logo" /> */}
          <h1 tw="font-black text-[2.5rem]">{title}</h1>
        </Link>

        {/* Tagline & Links */}
        <p tw="mt-2 text-gray-600 text-sm">
          Largely inspired by the {' '}
          <a
            href="https://github.com/scio-labs/inkathon"
            target="_blank"
            tw="font-semibold text-gray-500 hover:text-gray-100"
          >
            Ink!athon
          </a>{' '}
           project.
        </p>
        <p tw="mt-2 text-gray-600 text-sm">
          Made by {' '}
          <a
            href="https://github.com/tomas-oa"
            target="_blank"
            tw="font-semibold text-gray-500 hover:text-gray-100"
          >
            Tomás Opazo
          </a>{' '}
          in collaboration with {' '}
          <a
            href="https://paltalabs.io"
            target="_blank"
            tw="font-semibold text-gray-500 hover:text-gray-100"
          >
            PaltaLabs &#129361;
          </a>{' '}
        </p>
        <p tw="mt-4 mb-2 text-gray-400">{desc}</p>
        <p tw="mt-4 mb-2 text-gray-400">Here's some intresting links to get to know me better!</p>
        <div tw='flex gap-12 mb-6'>
          <Link
            tw='text-blue-500 underline font-bold bg-gray-800 p-2 px-4 rounded-lg hover:bg-gray-900 hover:text-gray-100'
            href={'https://tomas-oa.vercel.app'}
            target="_blank"
          >
            Portfolio
          </Link>
          <Link
            tw='text-blue-500 underline font-bold bg-gray-800 p-2 px-4 rounded-lg hover:bg-gray-900 hover:text-gray-100'
            href={'https://docs.google.com/document/d/e/2PACX-1vRhw9Ec8D3yJypLLvmZbBIUSpNoNRTpeusR4vtYnBO5UdYy32yCopcExdskQgEfm0UKLNppr0hUEr5G/pub'}
            target="_blank"
          >
            CV
          </Link>
        </div>

        {/* Github & Vercel Buttons */}
        <div tw="flex space-x-2">
          <StyledIconLink href={githubHref} target="_blank">
            <img src="/icons/github-button.svg" alt="Github Repository" />
          </StyledIconLink>
          {/* <StyledIconLink href={deployHref} target="_blank">
            <Image src={vercelIcon} priority height={32} alt="Deploy with Vercel" />
          </StyledIconLink>
          <StyledIconLink href={telegramHref} target="_blank">
            <Image src={telegramIcon} priority height={32} alt="Telegram Group" />
          </StyledIconLink>
          <StyledIconLink href={sponsorHref} target="_blank">
            <Image src={sponsorIcon} priority height={32} alt="Sponsor the Project" />
          </StyledIconLink> */}
        </div>

        <div tw="my-14 w-14 bg-gray-800 h-[2px]" />
      </div>
    </>
  )
}
