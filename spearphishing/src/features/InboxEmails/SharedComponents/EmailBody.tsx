
interface EmailBodyProps{
    data: any
    children: any
}

export function EmailBody(props: EmailBodyProps){
    return (
        <div className="EmailBody">
            <p>Data: {JSON.stringify(props.data)}</p>

            {props.children}
        </div>
    )
}