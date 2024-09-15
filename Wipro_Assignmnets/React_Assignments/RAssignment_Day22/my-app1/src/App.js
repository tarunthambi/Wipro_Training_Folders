import './App.css';
import React, { useState } from 'react';
import Card from './Task_1/TASK_1_Card.js';
import LoginForm from './Task_2/TASK_2_LoginForm.js';
import Button from './Task_3/TASK_3_Button.js';
import Dropdown from './Task_4/TASK_4_Dropdown.js';
import Tabs from './Task_5/TASK_5_Tabs.js';


function App() {

  // TASK-1
  const [additionalContent, setAdditionalContent] = useState(''); 
  const [additionalContent1, setAdditionalContent1] = useState('');

  const handleButtonClick = (action) => {
    if (action === 'Follow') {
      setAdditionalContent('You started following this profile!');
    } else if (action === 'Message') {
      setAdditionalContent('Message has been sent');
    }
  };

  const handleButtonClick1 = (action) => {
    if (action === 'Add to Cart') {
      setAdditionalContent1('Your item is added to cart');
    } else if (action === 'Buy Now') {
      setAdditionalContent1('Item is purchased.Thank You!');
    }
  }

  //  TASK-3
    const handleClick = () => {
      alert('Button clicked!');
    };

  //  TASK-4
    const productOptions = ["iPhone", "Samsung Galaxy", "OnePlus", "Google Pixel", "Sony Xperia"];

    const handleSelectionChange = (selectedProducts) => {
      console.log("Selected products:", selectedProducts);
    };

  //  TASK-5
  const initialTabs = [
    { label: "Home", content: "Welcome to the Home tab!" },
    { label: "Profile", content: "This is the Profile tab content." },
    { label: "Settings", content: "Here are your Settings." }
  ];

  const [tabs, setTabs] = useState(initialTabs);

  const handleCloseTab = (index) => {
    if (tabs.length > 1) {
      const updatedTabs = tabs.filter((_, i) => i !== index);
      setTabs(updatedTabs);
    }
  };
  
  return(
    <div className="App">
      <h2>User Profile Card</h2>
      {/* //TASK-1 */}
      <Card
      layout="vertical"
      header={ <div>
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
              </div>}
      content={
        <div>
          <h4>John Doe</h4>
          <p class="text-secondary mb-1">Full Stack Developer</p>
          <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
        </div>
      }
      footer={
        <div>
          <button class="btn btn-primary" onClick={() => handleButtonClick('Follow')}>Follow</button>
          <button class="btn btn-outline-primary" onClick={() => handleButtonClick('Message')}>Message</button>
        </div>
      }
      />
      <div style={{ marginTop: '20px', fontSize: '18px' }}>
        {additionalContent}
      </div>
      <h2>Product Details Card</h2>
      <Card
        layout="horizontal"
        header={<div>
                  <h4 >Samsung Galaxy S22 Ultra</h4>
                </div>}
        content={<div>
                  <h4 class="text-muted font-size-s">Details Description :</h4>
                  <p class="text-secondary mb-1">1.Flagship smartphone</p>
                  <p class="text-secondary mb-1">2.Premium Design</p>
                  <p class="text-secondary mb-1">3.Dynamic AMOLED 2X</p>
                  <p class="text-secondary mb-1">4.Night Mode & AI Enhancements</p>
                  <p class="text-secondary mb-1">5.Powerful Qualcomm Chipset</p>
                  </div>}
        footer={<div>
                  <button class="btn btn-primary" onClick={() => handleButtonClick1('Add to Cart')}>Add to Cart</button>
                  <button class="btn btn-success" onClick={() => handleButtonClick1('Buy Now')}>Buy Now</button>
                </div>}
      />
      <div style={{ marginTop: '20px',marginLeft:'100px', fontSize: '18px' }}>
        {additionalContent1}
      </div>
      {/* //TASK-2 */}
      <h2>Input Field Component</h2>
      <LoginForm/>

      {/* //TASK-3 */}
      <h2>Button Component</h2>
         <div style={{textAlign:'center'}}>
            <input type='text' placeholder='Enter any text' style={{width:'30%',marginBottom:'20px'}}></input><br/>
            <Button label="Click Me!" color="primary" size="medium" onClick={handleClick} />
            <br/>
            <br/>
            <input type='text' placeholder='Enter any text' style={{width:'30%',marginBottom:'20px'}}></input><br/>
            <Button label="Click Me!" color="secondary" size="large" onClick={handleClick} />
        </div>

        {/* //TASK-4 */}
      <h2>Dropdown Component</h2>
      <Dropdown 
        options={productOptions} 
        multiple={true} 
        maxSelection={5}
        onSelectionChange={handleSelectionChange} 
      />
      {/* //TASK-5 */}
      <h2>Tabs Component</h2>
      <Tabs tabs={tabs} showCloseButtons={true} onCloseTab={handleCloseTab} />
    </div>
  )
}

export default App;
