import EventForm from "@/components/form/EventForm";

const CreateEvent = () => {
  return (
    <div>
      <div className="text-3xl font-extrabold bg-gray-50 pt-6 sm:pt-8 pb-6 sm:pb-8 flex justify-center items-center sm:flex sm:justify-start sm:pl-30">
        <h1>Create Event</h1>
      </div>
      <EventForm />
    </div>
  );
};

export default CreateEvent;
