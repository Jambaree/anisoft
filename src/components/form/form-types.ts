// Base type for common field properties
export interface BaseField {
  type: string;
  id: number;
  formId: number;
  label: string;
  adminLabel: string;
  isRequired: boolean;
  size: "small" | "medium" | "large";
  errorMessage: string;
  visibility: "visible" | "hidden";
  inputs: null | any[]; // Could be more specific if input structure is known
  description: string;
  allowsPrepopulate: boolean;
  inputMask: boolean;
  inputMaskValue: string;
  inputMaskIsCustom: boolean;
  maxLength: string;
  inputType: string;
  labelPlacement: string;
  descriptionPlacement: string;
  subLabelPlacement: string;
  placeholder: string;
  cssClass: string;
  inputName: string;
  noDuplicates: boolean;
  defaultValue: string;
  enableAutocomplete: boolean;
  autocompleteAttribute: string;
  choices: any; // Could be more specific if choices structure is known
  conditionalLogic: any; // Could be more specific if conditional logic structure is known
  productField: string;
  layoutGridColumnSpan: string;
  enablePasswordInput: string;
  enableEnhancedUI: number;
  layoutGroupId: string;
  multipleFiles: boolean;
  maxFiles: string;
  calculationFormula: string;
  calculationRounding: string;
  enableCalculation: string;
  disableQuantity: boolean;
  displayAllCategories: boolean;
  useRichTextEditor: boolean;
  errors: any[]; // Could be more specific if errors structure is known
  pageNumber: number;
  fields: string;
  displayOnly: string;
  checkboxLabel: string;
  [key: string]: any; // Allows for additional properties not explicitly listed
}

// Specific field types could be defined here
export interface TextField extends BaseField {
  type: "text";
}

export interface EmailField extends BaseField {
  type: "email";
  emailConfirmEnabled: string;
}

export interface PhoneField extends BaseField {
  type: "phone";
  phoneFormat: "standard" | "international";
}

export interface TextAreaField extends BaseField {
  type: "textarea";
}

type FormField = TextField | EmailField | PhoneField | TextAreaField; // Extend with other specific field types as necessary

export interface Button {
  type: string;
  text: string;
  imageUrl: string;
  width: string;
  location: "top" | "bottom" | "left" | "right";
  layoutGridColumnSpan: number;
  id: string;
}

export interface Notification {
  id: string;
  isActive: boolean;
  to: string;
  name: string;
  event: string;
  toType: string;
  subject: string;
  message: string;
  service: string;
  toEmail: string;
  toField: string;
  routing: any[]; // Could be more specific if routing structure is known
  fromName: string;
  from: string;
  replyTo: string;
  bcc: string;
  disableAutoformat: boolean;
  notification_conditional_logic_object: string;
  notification_conditional_logic: string;
  conditionalLogic: any; // Could be more specific if conditional logic structure is known
  cc: string;
  enableAttachments: boolean;
  [key: string]: any; // Allows for additional properties not explicitly listed
}

export interface Confirmation {
  id: string;
  name: string;
  isDefault: boolean;
  type: "message" | "redirect"; // Extend with other types as necessary
  message: string;
  url: string;
  pageId: string;
  queryString: string;
  [key: string]: any; // Allows for additional properties not explicitly listed
}

export interface Form {
  fields: FormField[];
  button: Button;
  title: string;
  description: string;
  version: string;
  id: number;
  markupVersion: number;
  nextFieldId: number;
  useCurrentUserAsAuthor: boolean;
  postContentTemplateEnabled: boolean;
  postTitleTemplateEnabled: boolean;
  postTitleTemplate: string;
  postContentTemplate: string;
  lastPageButton: any; // Could be more specific if structure is known
  pagination: any; // Could be more specific if structure is known
  firstPageCssClass: string;
  labelPlacement: string;
  descriptionPlacement: string;
  subLabelPlacement: string;
  requiredIndicator: string;
  customRequiredIndicator: string;
  cssClass: string;
  saveButtonText: string;
  limitEntries: boolean;
  limitEntriesCount: string;
  limitEntriesPeriod: string;
  limitEntriesMessage: string;
  scheduleForm: boolean;
  scheduleStart: string;
  scheduleEnd: string;
  schedulePendingMessage: string;
  scheduleMessage: string;
  requireLogin: boolean;
  requireLoginMessage: string;
  honeypotAction: string;
  validationSummary: boolean;
  deprecated: string;
  saveEnabled: string;
  enableHoneypot: boolean;
  enableAnimation: boolean;
  save: {
    enabled: boolean;
    button: Button;
  };
  scheduleStartHour: string;
  scheduleStartMinute: string;
  scheduleStartAmpm: string;
  scheduleEndHour: string;
  scheduleEndMinute: string;
  scheduleEndAmpm: string;
  notifications: Record<string, Notification>;
  confirmations: Record<string, Confirmation>;
  is_active: string;
  date_created: string;
  is_trash: string;
}
