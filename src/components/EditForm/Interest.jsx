import { useState } from "react";
import { FormHeader } from "./FormHeader";
import { FormContainer } from "./FormContainer";
import { Input } from "../FormElements/Input";
import { InputWrapper } from "../FormElements/InputWrapper";
import { Button } from "../Button";
import { EmojiPicker } from "./EmojiPicker";

const PLACEHOLDERS = [
  { iconId: "✈️", name: "Traveling" },
  { iconId: "📕", name: "Reading" },
  { iconId: "🏀", name: "Basketball" },
  { iconId: "🎶", name: "Music" },
  { iconId: "🎨", name: "Art" },
  { iconId: "✍️", name: "Writing" },
  { iconId: "⛑️", name: "Volunteer work" },
  { iconId: "📷", name: "Photography" },
  { iconId: "🥾", name: "Hiking" },
  { iconId: "💡", name: "Technology" },
]

export function Interest({ step, data, onAddInterest, onChange, onDeleteEntry }) {
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState(null);
  const entries = data.length;

  const hideEmojiTooltip = () => setIsTooltipActive(false);

  function handleEmojiSelect(e) {
    onChange(selectedInterest, "iconId", e.native);
    hideEmojiTooltip();
  }

  function handleClickOutsidePicker(e) {
    const iconPickerBtn = e.target.closest(".btn-icon-picker");
    if (iconPickerBtn) return;

    hideEmojiTooltip();
  }

  return (
    <section className="edit-block">
      <FormHeader
        step={step}
        title={"Interests"}
        desc={
          <>
            <p>
              Your interests can give employers a better sense of who you are as a person and what
              motivates you.
            </p>
            <p>
              Be sure to choose interests that are relevant to the job you're applying for, and that
              showcase your personality, skills, and values. e.g if you're applying for a job in
              marketing, include interests such as writing or photography.
            </p>
          </>
        }
        button={
          <Button
            variant="add"
            onClick={onAddInterest}
            title="Add new interest"
            content="Add Interest"
          />
        }
      />

      <FormContainer>
        {data.map((interest, index) => {
          let iconId;
          if (interest.iconId === null) {
            iconId = PLACEHOLDERS[index] ? PLACEHOLDERS[index].iconId : "🎱";
          } else {
            iconId = interest.iconId;
          }

          return (
            <InputWrapper variant="row" key={interest.id}>
              <Button
                onClick={() => {
                  setIsTooltipActive(true);
                  setSelectedInterest(interest.id);
                }}
                  title={interest.name ? `Change ${interest.name} icon` : "Change interest icon"}
                  content={<span style={{ fontSize: '2em' }}>{iconId}</span>}
                  extraClasses="btn-icon-picker"
              />

              <Input
                id={`cvInterest${index}`}
                type="text"
                placeholder={
                  PLACEHOLDERS[index] ? `e.g. ${PLACEHOLDERS[index].name}` : "New interest..."
                }
                value={interest.name}
                onChange={(e) => onChange(interest.id, "name", e.target.value)}
              />

              {entries > 1 && (
                <Button
                  variant="delete"
                  onClick={() => onDeleteEntry(interest.id)}
                  title="Delete interest"
                />
              )}

              {isTooltipActive && interest.id === selectedInterest && (
                <EmojiPicker
                  shouldRender={isTooltipActive}
                  onEmojiSelect={handleEmojiSelect}
                  onClickOutside={handleClickOutsidePicker}
                ></EmojiPicker>
              )}
            </InputWrapper>
          );
        })}
      </FormContainer>
    </section>
  );
}