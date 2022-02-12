import React, { useState } from 'react';

import './Inbox.css';
import { InboxEntry } from './InboxEntry/InboxEntry';

export function Inbox(){


    return(
        <div className='inbox'>
            <InboxEntry></InboxEntry>
            <InboxEntry></InboxEntry>
            <InboxEntry></InboxEntry>
            <InboxEntry></InboxEntry>
        </div>
    )
}