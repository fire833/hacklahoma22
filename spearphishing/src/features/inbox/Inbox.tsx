import React, { useState } from 'react';
import { useAppSelector } from '../../app/hooks';

import './Inbox.css';
import { InboxEntry } from './InboxEntry/InboxEntry';

export function Inbox(){

    const inboxEmails = useAppSelector(state => state.inbox.emails);


    console.log(inboxEmails);
    


    return(
        <div className='inbox'>
            {
                inboxEmails.map(email => {
                    return (<InboxEntry key={email.blurb} email={email}></InboxEntry>)
                })
            }
        </div>
    )
}