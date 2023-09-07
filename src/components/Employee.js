import EditEmployee from "./EditEmployee";
function Employee(props){
    return (
        <div className="min-w-[350px] max-w-[359px] py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img 
        class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" 
        src="/img/erin-lindford.jpg"
        />
        <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">
                {props.name}
            </p>
            <p class="text-slate-500 font-medium">
                {props.role}
            </p>
            </div>

        {props.editEmployee}
        </div>
        </div>
                
        
    );
}
export default Employee;