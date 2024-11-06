import { Helmet } from "react-helmet"
import { Buttom, Img, Input, Text, Heading  } from "../../components"
import { UserProfileHeader} from "../../components/UserProfileHeader";
import React, { Suspense } from "react";


const data = [
    {
        headarText: (
            <>
            ব্যক্তিগত
            <br/>
            তথ্য
            
            </>

        ),
    },
    { headarText:"পারিবারিক তথ্য"},
    { headarText:"ঠিকানা"},
    { headarText:"কারন"},
    {
        headarText: (
            <>
            তথ্য
            <br/>
            যাচাই
            
            </>

        ),
    },

];

export default function (){
    return(
    <>
        <Helmet>
            <title>web apps</title>
            <meta name="discription" content="web site" />

        </Helmet>
        <div className="w-full bg-gray-100">
            <div className="mb-1">
                <div className="flex h-[666px] item-start justify-center bg-[ url(/public/images/img_group_4.png)] bg-cover bg-no-repeat px-14 py-[98px] md:h-auto md:p-5">
                <div className="mb-[334px] flex flex-col items-center gap-0.5">
                    <Heading as="h1" className="text-[64px] font-bold tracking-[-1.28px] text-white-a700 md:text-[48px]">
                    এসাইলামের আবেদন লিখুন

                    </Heading>

                    <Text 
                    size="textlg"
                    as="p"
                    className="text-[24px] font-normal tracking-[0.48px] text-white-a700 md:text-[22px] sm:relative sm:bottom-[30px]"
                    
                    >
                        শুধুমাত্র কিছু তথ্য দিয়ে সহজে এবং দ্রুত নির্ভুল আবেদন লিখুন

                    </Text>



                </div>

                </div>

                <div className="relative mx-[334px] mt-[-374px] md:mx:0">
                    <div className=" flex flex-col items-center justify-center gap-5 rounded-tl-[12px] rounded-tr-[12px] bg-blue_gray-100 p-[42px] md:p-5">
                        <Heading
                        size="headingmd"
                        as= "h2"
                        className="text-[40px] font-bold tracking-[-0.80px] text-gray-900 md:text[38px] sm:text-[36px]"
                        >
                            ফরম পূরন করুন
                            
                        </Heading>
                        <div className="container-xs mb-1 flex gap-7 md:flex-col sm:grid sm: mx-w-[612px] sm:grid-cols-3 sm:grid-rows-2 sm:flex-row sm:items-stretch sm:justify-between">
                            <Suspense fallback={<div> Loading feed..</div>}>
                            {data.map((d, index) => (
                                <UserProfileHeader {...d} key={"one" + index} className="bg-blue-900" />

                            )

                            )}
                        

                            </Suspense>



                        </div>

                    </div>

                    <div className="flex flex-col items-center justify-center gap-8 rounded-bl-[12px] rounded-br-[12px] bg-white-a700 p-6 sm:p-5">
                        <Button color= "red_A700" shape="square" className="min-w-[254px] px-[18px] tracking-[-0.32px]">
                        সব তথ্য অবশ্যই বাংলায় লিখতে হবে {""}


                        </Button>
                        <div className="container-sm flex flex-col itams-end gap-[72px] md: gap[54px] sm:gap-9">
                            <div className="flex flex-col gap-5 self-stretch">
                                <div className="flex flex-col items-start gap-2">
                                    <Text as="p" className="text-[16px] font-normal tracking-[-0.32px] text-black-900 ">
                                    আবেদনকারীর নামঃ {""}

                                    </Text>
                                    <Input
                                    shape= "rounded"
                                    name= "groupeight"
                                    placeholder={'আবেদনকারীর নাম লিখুন'}
                                    className="self-stretch rounded border border-solid border-gray-300 px-2 tarcking-[-0.32px] "
                                    
                                    />
                                    
                                    
                                

                                </div>


                                <div className="flex flex-col items-start gap-2">
                                    <Text as="p" className="text-[16px] font-normal tracking-[-0.32px] text-black-900 ">
                                    আবেদনকারীর জন্ম তারিখঃ {""}

                                    </Text>
                                    <Input
                                    shape= "rounded"
                                    name= "groupeight_one"
                                    placeholder={'তারিখ/মাস/সাল (উদাঃ ২৬/০৩/১৯৮০)'}
                                    className="self-stretch rounded border border-solid border-gray-300 px-2 tarcking-[-0.32px] "
                                    
                                    />
                                    
                                    
                                

                                </div>

                                <div className="flex flex-col items-start gap-2">
                                <Text as="p" className="text-[16px] font-normal tracking-[-0.32px] text-black-900 ">
                                বৈবাহিক অবস্থ্যাঃ  {""}

                                    </Text>

                                    <div className="flex gap-3 self-stretch">
                                        <div className="flex rounded border border-solid border-gray-300_01 bg-gray-200 p-2">
                                           <div className="flex rounded border border-solid border-gray-300_01 bg-gray-200 p-2">
                                            <Buttom
                                            shape= "round"
                                            className= "min-w-[90px] rounded border border-solid border-blue-900 px-[17px] tracking-[-0.32px]"

                                            >
                                                অবিবাহিত

                                            </Buttom>

                                            <div className="flex rounded border border-solid border-gray-300_01 bg-gray-200 p-2">
                                            <Buttom
                                            shape= "round"
                                            className= "min-w-[90px] rounded border border-solid border-blue-900 px-[17px] tracking-[-0.32px]"

                                            >
                                                অবিবাহিত

                                            </Buttom>

                                        </div>

                                        </div>

                                        </div>


                                        

                                    </div>


                                </div>


                                <div className="flex flex-col items-start gap-2">
                                    <Text as="p" className="text-[16px] font-normal tracking-[-0.32px] text-black-900 ">
                                    স্বামী/স্ত্রীর নামঃ  {""}

                                    </Text>
                                    <Input
                                    shape= "rounded"
                                    name= "groupeight-two"
                                    placeholder={'স্বামী/স্ত্রীর নাম লিখুন'}
                                    className="self-stretch rounded border border-solid border-gray-300 px-2 tarcking-[-0.32px] "
                                    
                                    />
                                    
                                    
                                

                                </div>



                                <div className="flex flex-col items-start gap-2">
                                    <Text as="p" className="text-[16px] font-normal tracking-[-0.32px] text-black-900 ">
                                    স্বামী/স্ত্রীর জন্ম তারিখঃ {""}

                                    </Text>
                                    <Input
                                    shape= "rounded"
                                    name= "groupeight"
                                    placeholder={'তারিখ/মাস/সাল (উদাঃ ২৬/০৩/১৯৮০)'}
                                    className="self-stretch rounded border border-solid border-gray-300 px-2 tarcking-[-0.32px] "
                                    
                                    />
                                    
                                    
                                

                                </div>

                                <div className="flex flex-col items-start gap-2">
                                <Text as="p" className="text-[16px] font-normal tracking-[-0.32px] text-black-900 ">
                                সন্তানঃ  {""}

                                    </Text>

                                    <div className="flex gap-3 self-stretch">
                                           <Buttom
                                            shape= "round"
                                            className= "min-w-[90px] rounded border border-solid border-blue-900 px-[17px] tracking-[-0.32px]"

                                            >
                                                নাই

                                            </Buttom>

                                            <div className="flex rounded border border-solid border-gray-300_01 bg-gray-200 p-2">
                                            <Buttom
                                            shape= "round"
                                            className= "min-w-[90px] rounded border border-solid border-blue-900 px-[17px] tracking-[-0.32px]"

                                            >
                                               আছে

                                            </Buttom>

                                    </div>


                                </div>

                                
                               



                            </div>

                        </div>

                    </div>



                </div>

            </div>

        </div>
</div>
    


    </>
 );
}

 