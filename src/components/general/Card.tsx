import { useTranslation } from "react-i18next";
import { InfoData } from "../../_mock/Info";
import { Card, CardContent, CardHeader } from "../ui/card";

const CartTouch = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-5">
      {InfoData &&
        InfoData.length > 0 &&
        InfoData.map((info, index) => {
          return (
            <Card
              key={index}
              className="border-none hover:shadow-md duration-300"
            >
              <CardHeader className="flex justify-center items-center">
                <img
                  className="w-10 h-10 bg-[#F78F42] rounded-full p-2"
                  src={info.image}
                  alt=""
                />
              </CardHeader>
              <CardContent className="flex flex-col justify-between items-center w-full">
                <div className="flex flex-col justify-between items-center w-full">
                  <div className="flex justify-between items-center w-full lg:text-[14px] text-[12px] font-[400] text-[#131313]">
                    <span>
                      {info.id === 0
                        ? t("Ölkə")
                        : info.id === 1
                        ? "Email"
                        : t("Tel")}
                    </span>
                    <span>
                      {info.id === 0
                        ? t(`${info.country}`)
                        : info.id === 1
                        ? info.email
                        : info.phone}
                    </span>
                  </div>
                  <div className="flex justify-between items-center w-full lg:text-[14px] text-[12px] font-[400] text-[#131313]">
                    <span>
                      {info.id === 0
                        ? t("Şəhər")
                        : info.id === 1
                        ? "Linkedin"
                        : ""}
                    </span>
                    <span>
                      {info.id === 0
                        ? info.city
                        : info.id === 1
                        ? info.linkedin
                        : ""}
                    </span>
                  </div>
                  <div className="flex justify-between items-center w-full lg:text-[14px] text-[12px] font-[400] text-[#131313]">
                    <span>
                      {info.id === 0
                        ? t("Küçə")
                        : info.id === 1
                        ? "Facebook"
                        : ""}
                    </span>
                    <span>
                      {info.id === 0
                        ? t(`${info.street}`)
                        : info.id === 1
                        ? info.facebook
                        : ""}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
    </div>
  );
};

export default CartTouch;
