import React, { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { InboxEmailKind } from '../inbox/ActiveEmail';
import { BossEmail } from '../InboxEmails/BossEmail/BossEmail';
import { OutgoingDraftEmail } from '../InboxEmails/OutgoingDraftEmail/OutgoingDraftEmail';
import "./MailView.css";

export function MailView() {


    let emails = useAppSelector(state => state.inbox.emails);
    let activeIndex = useAppSelector(state => state.inbox.activeEmailIndex);

    return (
        <div className='MailView'>
            <h1>Mail Pane</h1>

            <BossEmail activeEmail={activeIndex === null ? null : emails[activeIndex]}></BossEmail>

            <OutgoingDraftEmail activeEmail={activeIndex === null ? null : emails[activeIndex]}></OutgoingDraftEmail>


        </div>
    )
}