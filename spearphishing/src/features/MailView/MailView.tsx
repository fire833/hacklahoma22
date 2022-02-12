import React, { useState } from 'react';
import { InboxEmailKind } from '../inbox/ActiveEmail';
import { BossEmail } from '../InboxEmails/BossEmail/BossEmail';
import { OutgoingDraftEmail } from '../InboxEmails/OutgoingDraftEmail/OutgoingDraftEmail';
import "./MailView.css";

export function MailView(){


    return(
        <div className='MailView'>
            <h1>Mail Pane</h1>

            {/* <BossEmail> </BossEmail>

            <OutgoingDraftEmail></OutgoingDraftEmail> */}

            
        </div>
    )
}