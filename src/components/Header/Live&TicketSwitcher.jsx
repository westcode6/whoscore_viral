import React from 'react'
import { styles } from '../../styles'

export default function LivescoresAndTicketSwitcher() {
  return (
    <section className=''>
        <div className={`${styles.paddingY} flex items-center justify-center`}>
                <div className='w-64 flex  glass-effect rounded-full overflow-hidden'>
                    <button className='glass-effect-light text-[12px] text-neutral-100 tracking-wide rounded-full w-full px-4 py-3'><span>Livescores</span></button>
                    <button className='hover-bg-neutral-900 text-[12px] text-neutral-500 tracking-wide rounded-full w-full px-4 py-3'><span>Ticket ID</span></button>
                </div>
        </div>


        <main>

        </main>
    </section>
  )
}
