"use client";
import {Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { useState } from "react";
import CommonForm from "../common-form";
import { recruiterOnboardFormControl } from "@/utils";
import { initialRecruiterFormData } from "@/utils";
import { candidateOnboardFormControl } from "@/utils";

function OnBoard() {
    const [currentTab,setCurrentTab]=useState('candidate')
    const [recruiterFormData,setRecruiterFormData]=useState(initialRecruiterFormData)
    const [candidateFormData,setCandidateFormData]=useState(initialRecruiterFormData)

    function handleTabChange(value){
        setCurrentTab(value)
    }

  return (
    <div className="bg-white">
      <Tabs value={currentTab} onValueChange={handleTabChange}>
        <div className="w-full">
          <div className="flex items-baseline justify-between border-b pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Welcome to onboarding
            </h1>
            <TabsList>
              <TabsTrigger value="candidate">Candidate</TabsTrigger>
              <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent value="candidate">
            <CommonForm
            formControls={candidateOnboardFormControl}
            buttonText={'Onboard as candidate'}
            formData={candidateFormData}
            setFormData={setCandidateFormData}
            />
        </TabsContent>
        <TabsContent value="recruiter">
            <CommonForm 
            buttonText={'Onboard as recruiter'}
            formControls={recruiterOnboardFormControl} 
            formData={recruiterFormData} 
            setFormData={setRecruiterFormData} 
            
             />
        </TabsContent>

      </Tabs>
    </div>
  );
}

export default OnBoard;
