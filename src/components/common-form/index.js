import { get } from "mongoose";
import { Button } from "../ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";



function CommonForm({
    action,
    buttonText,
    isBtnDisabled,
    formControls,
    btnType,
    formData,
    setFormData,
    handleFileChange
}) {
  
    function renderInputByComponentType(getCurrentControl){
        let content=null;
        switch(getCurrentControl.componentType){

            case 'input' :
                content = (<div className="relative  flex items-center mt-8">
                    <Input
                    type='text'
                    disabled={getCurrentControl.disabled}
                    placeholder={getCurrentControl.placeholder}
                    name={getCurrentControl.name}
                    value={formData[getCurrentControl.name]}
                    onChange={(event)=> setFormData({
                         ...formData,
                        [event.target.name]: event.target.value
                    })}
                    className="w-full rounded-md h-[60px] px-4 border bg-gray-100 text-lg outline-none drop-shadow-sm translate-all duration-200 ease-in-out focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                </div>
                );
             break;

             case 'file' :
                content = (<Label 
                for={getCurrentControl.name}
                className="flex bg-gray-100 items-center px-3 py-3 mx-auto mt-6 text-center border-2 border-dashed cursor-pointer "
                >
                    <h2>{getCurrentControl.label}</h2>
                    <Input onChange={handleFileChange} id={getCurrentControl.name} type="file" className="cursor-pointer bg-white ml-4 pt-2"/>
                </Label>
                );
             break;

             default:
                content = (<div className="relative flex items-center mt-8">
                    <Input
                    type='text'
                    disabled={getCurrentControl.disabled}
                    placeholder={getCurrentControl.placeholder}
                    name={getCurrentControl.name}
                    value={formData[getCurrentControl.name]}
                    onChange={(event)=> setFormData({
                         ...formData,
                        [event.target.name]: event.target.value
                    })}
                    className="w-full rounded-md h-[60px] px-4 border bg-gray-100 text-lg outline-none drop-shadow-sm translate-all duration-200 ease-in-out focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                </div>
                );
                break;

        }
        return content;
    }
  
  
    return (
    <form action={action}>
        {
          formControls.map(control=> renderInputByComponentType(control))
        }
        <div className="mt-6 w-full">
            <Button
             disabled={isBtnDisabled}
             type={btnType || 'submit'}
             className="disabled:opacity-55 flex h-11 items-center justify-center"
             >
                {buttonText}
                </Button>
        </div>
    </form>
  )
}

export default CommonForm
