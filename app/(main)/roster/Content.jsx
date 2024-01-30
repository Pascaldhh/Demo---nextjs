"use client";
import PlayerCard from '@components/PlayerCard'
import { TitleType } from '@components/Types'
import Title from '@components/Title'
import { useContext, useEffect } from 'react';
import { ThemeContext } from '@components/ProviderWrapper';

export default function Content() {
  const { getImages } = useContext(ThemeContext);
  useEffect(() => getImages(), []);

  return (
    <div className='container'>
      <section>
        <Title title="Live" type={TitleType.Big} className="mb-6"/>
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-14">
          <PlayerCard isLive={true} title="SAMURAI" subtitle="STREAMER" src="/assets/img/card-samurai.png" />
          <PlayerCard isLive={true} title="GHOST" subtitle="STREAMER" src="/assets/img/card-ghost.png" />
          <PlayerCard isLive={true} title="KNIGHT" subtitle="OWNER" src="/assets/img/card-knight.png" />
          <PlayerCard isLive={true} title="ARCHER" subtitle="STREAMER" src="/assets/img/card-archer.png" color="rgb(255, 0, 0)" />
          <PlayerCard isLive={true} title="SNIPER" subtitle="ELDER" src="/assets/img/card-sniper.png" color="rgb(255, 0, 0)"/>
          <PlayerCard isLive={true} title="KAIN" subtitle="FOUNDER" src="/assets/img/card-kain.png" color="rgb(82, 251, 23)"/>
          <PlayerCard isLive={true} title="EVELYNN" subtitle="STREAMER" src="/assets/img/card-evelynn.png" color="rgb(82, 251, 23)"/>
        </div>
      </section>
      <section>
        <Title title="Leadership" type={TitleType.Big} className="mt-16 mb-6"/>
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-14">
          <PlayerCard isLive={true} title="KAIN" subtitle="FOUNDER" src="/assets/img/card-kain.png" color="rgb(82, 251, 23)"/>
          <PlayerCard isLive={true} title="SAMURAI" subtitle="STREAMER" src="/assets/img/card-samurai.png" />
          <PlayerCard isLive={true} title="SAMURAI" subtitle="STREAMER" src="/assets/img/card-samurai.png" />
          <PlayerCard isLive={true} title="SAMURAI" subtitle="STREAMER" src="/assets/img/card-samurai.png" />
          <PlayerCard isLive={true} title="SAMURAI" subtitle="STREAMER" src="/assets/img/card-samurai.png" />
        </div>
      </section>
      <section>
        <Title title="Pvp Squads" type={TitleType.Big} className="mt-16 mb-6"/>
        <div className="">
          <Title title="Pvp Squad 01" type={TitleType.Medium} className="mt-14 mb-2"/>
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-14">
            <PlayerCard title="VOID" subtitle="SQUAD 01 LEADER" src="/assets/img/card-void.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
          </div>
        </div>
        <div className="">
          <Title title="Pvp Squad 02" type={TitleType.Medium} className="mt-14 mb-2"/>
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-14">
            <PlayerCard title="VOID" subtitle="SQUAD 01 LEADER" src="/assets/img/card-void.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
          </div>
        </div>
        <div className="">
          <Title title="Pvp Squad 03" type={TitleType.Medium} className="mt-14 mb-2"/>
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-14">
            <PlayerCard title="VOID" subtitle="SQUAD 01 LEADER" src="/assets/img/card-void.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
            <PlayerCard title="SOLIDER" subtitle="MEMBER" src="/assets/img/card-solider.png" />
          </div>
        </div>
      </section>
    </div>
  )
}
