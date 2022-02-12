import React, { useState } from 'react';
import { InboxEmailKind } from '../inbox/ActiveEmail';
import { BossEmail } from '../InboxEmails/BossEmail/BossEmail';
import "./MailView.css";

export function MailView(){


    return(
        <div className='MailView'>
            <h1>Mail Pane</h1>

            <BossEmail activeEmail={{
                data: {msg: "Yo"},
                type: InboxEmailKind.BossEmail
            }}></BossEmail>
        </div>
    )
}