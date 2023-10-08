// import React, { useEffect, useState } from 'react';
//
// function App() {
//     const [response, setResponse] = useState(null);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             const apiUrl = 'https://api.openai.com/v1/chat/completions';
//             const apiKey = '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'; // Replace with your OpenAI API key
//
//             const requestData = {
//                 model: 'gpt-3.5-turbo',
//                 messages: [{ role: 'user', content: 'What is water cycle?' }],
//                 temperature: 0.7,
//             };
//
//             try {
//                 const response = await fetch(apiUrl, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: `Bearer ${apiKey}`,
//                     },
//                     body: JSON.stringify(requestData),
//                 });
//
//                 if (response.ok) {
//                     const data = await response.json();
//                     setResponse(data);
//                 } else {
//                     console.error('Failed to fetch data');
//                 }
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };
//
//         fetchData();
//     }, []);
//
//     return (
//         <div>
//             <h1>OpenAI Chat Response</h1>
//             <pre>{JSON.stringify(response, null, 2)}</pre>
//             {console.log(response)}
//         </div>
//     );
// }
//
// export default App;
