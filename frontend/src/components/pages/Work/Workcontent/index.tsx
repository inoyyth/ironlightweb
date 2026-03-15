import MainWorkContent from "@/components/pages/Work/Workcontent/Main";
import SecondaryWorkContent from "@/components/pages/Work/Workcontent/Secondary";

export default function WorkContent() {
  return (
    <div className="flex flex-col gap-16 bg-neutral-900 border-y border-neutral-25">
      <MainWorkContent />
      <SecondaryWorkContent />
    </div>
  )
}