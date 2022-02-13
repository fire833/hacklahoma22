import React, { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { InboxEmailKind } from '../inbox/ActiveEmail';
import { BossEmail } from '../InboxEmails/BossEmail/BossEmail';
import { IntroEmail } from '../InboxEmails/IntroEmail/IntroEmail';
import { OutgoingDraftEmail } from '../InboxEmails/OutgoingDraftEmail/OutgoingDraftEmail';
import { TargetBriefEmail } from '../InboxEmails/TargetBriefEmail/TargetBriefEmail';
import "./MailView.css";

export function MailView() {


    let emails = useAppSelector(state => state.inbox.emails);
    let activeIndex = useAppSelector(state => state.inbox.activeEmailIndex);


    let activeEmail = activeIndex === null ? null : emails[activeIndex];
    return (
        <div className='MailView'>
            <BossEmail activeEmail={activeEmail}></BossEmail>

            <OutgoingDraftEmail activeEmail={activeIndex === null ? null : emails[activeIndex]}></OutgoingDraftEmail>

            <IntroEmail activeEmail={activeEmail}></IntroEmail>

            <TargetBriefEmail activeEmail={activeEmail}></TargetBriefEmail>

        </div>
    )
}