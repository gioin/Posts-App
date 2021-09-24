export interface Posts {
    title: string;
    body: string;
    id: number;
  }
  
  type SetValue = (value: any) => void;
  export interface ContextProps {
    handleDelete: SetValue;
    openEditForm: SetValue;
    setShow: SetValue;
    show: any;
    setFormState: SetValue;
    formState: any;
    handleSubmit: SetValue;
    handleInputChange: SetValue;
    input: any;
    dispatch: SetValue;
  }
  
  export interface entriePost {
    post: Posts;
    index: number;
  }
  
  export interface entrieMyForm {
    inputRef: any;
  }
  
  export interface entrieDotBtn {
    post: Posts;
  }
  