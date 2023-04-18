import ChatBot from 'react-simple-chatbot';
import {ThemeProvider} from 'styled-components';
 
const steps = 
[
    {
        id: '0',
        message: 'Hey There!',
        trigger: '1',
		
    },	{
			id: '1',
			message: 'Please write your username',
			trigger: '2',
	},	{
			id: '2',
			user: true,
			trigger: '3',
	},  {
			id: '3',
			message: "Hey {previousValue}, How can I help you?",
			trigger: 4 
	},	{
			id: '4',
			options: [
			{value: 1, label: 'View Courses'},
				{value: 2, label: 'Read Articles'}
					],
					end: true 
	}
];
const theme = {
	background: '#C9FF8F',
	headerBgColor: '#197B22',
	headerFontSize: '20px',
	botBubbleColor: 'white',
	botFontColor: 'white',        
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

const config = {
		botAvatar: "img.png",
		userAvatar: "userimg.jpg",
		floating: true,
};
		

function App() {
    return (
        <div className="App">
		<ThemeProvider theme={theme}>
		<ChatBot
		headerTitle="ShubhamBot"
        steps={steps}
			{...config}
			
			/>
			</ThemeProvider>
			</div>
    );
}
 
export default App;