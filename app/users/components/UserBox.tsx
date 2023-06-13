
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import Avatar from "@/app/components/Avatar";
import LoadingModal from "@/app/components/LoadingModal";

interface IUserBoxProps {
  data: User
}


export default function UserBox({ data }: IUserBoxProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);

    axios.post('/api/conversations', { userId: data.id })
      .then((res) => {

        router.push(`/conversations/${res.data.id}`);
      })
      .finally(() => setIsLoading(false));
  }, [data, router]);

  // const handleClick = () => {
  //   setIsLoading(true);

  //   axios.post('/api/conversations', { userId: data.id })
  //     .then((res) => {
  //       console.log('data', res)
  //       // router.push(`/conversations/${res.data.id}`);
  //     })
  //     .finally(() => setIsLoading(false));
  // };

  return (
    <>
      { isLoading && <LoadingModal />}
      <div onClick={handleClick} className="w-full relative flex items-center space-x-3 bg-white p-3 hover:bg-neutral-100 rounded-lg transition cursor-pointer">
        <Avatar user={data} />
        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm fong-medium text-gray-900">
                {data.name}
              </p>
            </div>
          </div>
        </div>
      </div>
      </>

  );

}