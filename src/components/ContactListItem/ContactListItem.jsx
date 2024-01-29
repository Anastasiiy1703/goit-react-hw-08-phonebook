import ContactListItemCss from './ContactListItemCss.module.css';

const ContactListItem = ({ contact, onDelete }) => {

  return (
    <li className={ContactListItemCss.item}>
      <p>{contact.name}: {contact.number}</p>
      <button className={ContactListItemCss.button} onClick={onDelete}>Delete</button>
    </li>
  );
};

export default ContactListItem;







