import React, { useState } from 'react';
import { useAppSelector } from '../../app/hooks';

import './Inbox.css';
import { InboxEntry } from './InboxEntry/InboxEntry';

export function Inbox(){

    const inboxEmails = useAppSelector(state => state.inbox.emails);

    const activeIndex = useAppSelector(staet => staet.inbox.activeEmailIndex)

    console.log(inboxEmails);
    


    return(
        <div className='inbox'>
            {
                inboxEmails.map((email, index) => {
                    return (<InboxEntry key={index} email={email} index={index} isActive={activeIndex === index}></InboxEntry>)
                })
            }
        </div>
    )
}