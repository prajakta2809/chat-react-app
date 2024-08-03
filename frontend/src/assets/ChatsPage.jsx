import {PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) =>{
   // const chatProps = useMultiChatLogic('2d57158f-0605-4354-bcb4-f701bc5a1ba8',props.user.username, props.user.secret);
    return <div style={{height:'110vh'}}>
    <PrettyChatWindow
    projectId='2d57158f-0605-4354-bcb4-f701bc5a1ba8'
    username={props.user.username}
    secret={props.user.secret}
    style={{height:'100%'}}>
        
    </PrettyChatWindow>

    </div>
}

export default ChatsPage;