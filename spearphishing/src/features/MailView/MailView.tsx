import React, { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { InboxEmailKind } from '../inbox/ActiveEmail';
import { BossStatusEmail } from '../InboxEmails/BossEmail/BossEmail';
import { ConclusionEmail } from '../InboxEmails/ConclusionEmail/ConclusionEmail';
import { DraftEmail } from '../InboxEmails/DraftEmail/DraftEmail';
import { IntroEmail } from '../InboxEmails/IntroEmail/IntroEmail';
import { MarketEmail } from '../InboxEmails/MarketEmail/MarketEmail';
// import { OutgoingDraftEmail } from '../InboxEmails/OutgoingDraftEmail/OutgoingDraftEmail';
import { TargetBriefEmail } from '../InboxEmails/TargetBriefEmail/TargetBriefEmail';
import "./MailView.css";

export function MailView() {


    let emails = useAppSelector(state => state.inbox.emails);
    let activeIndex = useAppSelector(state => state.inbox.activeEmailIndex);


    let activeEmail = activeIndex === null ? null : emails[activeIndex];
    return (
        <div className='MailView'>
            <BossStatusEmail activeEmail={activeEmail}></BossStatusEmail>

            <DraftEmail activeEmail={activeEmail}></DraftEmail>

            <IntroEmail activeEmail={activeEmail}></IntroEmail>

            <TargetBriefEmail activeEmail={activeEmail}></TargetBriefEmail>

            <MarketEmail activeEmail={activeEmail}></MarketEmail>

            <ConclusionEmail activeEmail={activeEmail}></ConclusionEmail>

        </div>
    )
}