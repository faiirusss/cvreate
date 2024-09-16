import { Input } from '../FormElements/Input.jsx';
import {TextArea} from '../FormElements/TextArea.jsx'
import {InputWrapper} from '../FormElements/InputWrapper.jsx'
import { FormContainer } from './FormContainer.jsx';
import { FormHeader } from './FormHeader.jsx';
export function General({ step, data, onChange }) {
  return (
    <section className="edit-block">
      <FormHeader
        step={step}
        title={"General Information"}
        desc={
          <p>
            This is a critical part of your CV as it gives the potential employer a glimpse of who you are. This is an opportunity for you to introduce yourself, highlight your skills, and provide a brief summary of your career goals.
          </p>
        }
      />
      <FormContainer>
        <div className='flex-2-rows'>
          <InputWrapper>
            <Input
              label="First Name"
              id="cvFirstName"
              type="text"
              value={data.firstName}
              onChange={(e) => onChange("firstName", e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Last Name"
              id="cvLastName"
              type="text"
              value={data.lastName}
              onChange={(e) => onChange("lastName", e.target.value)}
            />
          </InputWrapper>
        </div>
        
        <InputWrapper>
          <Input
            label="Profession"
            id="cvProfession"
            type="text"
            value={data.profession}
            onChange={(e) => onChange("profession", e.target.value)}
            placeholder="e.g. Web Developer"
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label="City and Country"
            id="cvAddress"
            type="text"
            value={data.address}
            onChange={(e) => onChange("address", e.target.value)}
            placeholder="e.g. Jakarta, IDN"
          />
        </InputWrapper>
        
        <div className='flex-2-rows'>          
          <InputWrapper>
            <Input
              label="LinkedIn username"
              id="cvLinkedIn"
              type="text"
              value={data.linkedIn}
              onChange={(e) => onChange("linkedIn", e.target.value)}
              placeholder="e.g. fairussalimi"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Portfolio URL"
              id="cvPortofolio"
              type="url"
              value={data.portfolio}
              onChange={(e) => onChange("portfolio", e.target.value)}
              placeholder="e.g. https://github.com/faiirusss/"
            />
          </InputWrapper>
        </div>
        
        <div className='flex-2-rows'>          
          <InputWrapper>
            <Input
              label="Email"
              id="cvEmail"
              type="email"
              value={data.email}
              onChange={(e) => onChange("email", e.target.value)}
              placeholder="e.g. cvcreate@gmail.com"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Phone Number"
              id="cvPhoneNumber"
              type="tel"
              value={data.phoneNumber}
              onChange={(e) => onChange("phoneNumber", e.target.value)}
              placeholder="e.g. +62 8 1 55 1234 56789"
            />
          </InputWrapper>
        </div>
        
        <InputWrapper>
          <TextArea
            label="Description (About me)"
            id="cvAboutMe"
            type="text"
            value={data.aboutMe}
            onInputChange={(e) => onChange("aboutMe", e.target.value)}
            rows={6}
            resize="y"
            placeholder="Tell us about yourself! This is your chance to showcase your skills, and personality. Write a brief summary of who you are and what you can bring to the table"
          />
        </InputWrapper>
      </FormContainer>
    </section>
  )
}