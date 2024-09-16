export function FormContainer({extraClasses, children}) {
  const styles = extraClasses ? `edit-block_form ${extraClasses}` : "edit-block_form"
  return <div className={styles}>{children}</div>
}
