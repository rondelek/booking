import { StarIcon } from "@heroicons/react/24/solid";

type Props = {
  user: User;
};

export default function Card3({ user }: Props) {
  return (
    <article className="relative w-88 my-4 p-4 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center mb-4 space-x-4">
        <img className="w-10 h-10 rounded-full" src={user.image} alt="avatar" />
        <div className="space-y-1 font-medium dark:text-white">
          <div>
            {user.name}
            <p className="block text-sm text-gray-500 dark:text-gray-400">
              {user.date}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center mb-1">
        <span className="flex text-gold">
          <StarIcon className="w-5" />
          <StarIcon className="w-5" />
          <StarIcon className="w-5" />
          <StarIcon className="w-5" />
          <StarIcon className="w-5" />
        </span>
        <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
          {user.title}
        </h3>
      </div>
      <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
        {user.review}
      </p>
    </article>
  );
}
