import React, { useState, useEffect } from 'react';
import { Send, MapPin, CheckCircle, Smartphone, Wrench, MessageCircle, AlertCircle } from 'lucide-react';
import { RepairRequest } from '../types';

interface RequestRepairFormProps {
  prefilledIssue?: string;
  onSuccess?: () => void;
}

export default function RequestRepairForm({ prefilledIssue = '', onSuccess }: RequestRepairFormProps) {
  const [formData, setFormData] = useState<RepairRequest>({
    name: '',
    phoneNumber: '',
    deviceBrand: '',
    deviceModel: '',
    problemDescription: prefilledIssue,
    preferredService: 'Drop off at shop'
  });

  const [pickupAddress, setPickupAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledIssue) {
      setFormData((prev) => ({ ...prev, problemDescription: prefilledIssue }));
    }
  }, [prefilledIssue]);

  const brands = ['Apple (iPhone)', 'Samsung', 'Google Pixel', 'Tecno', 'Infinix', 'Xiaomi / Redmi', 'Oppo', 'Huawei', 'Other Brand'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic Validation
    if (!formData.name.trim()) return setError('Please enter your full name.');
    if (!formData.phoneNumber.trim()) return setError('Please enter your contact phone number.');
    if (!formData.deviceBrand) return setError('Please select your device brand.');
    if (!formData.deviceModel.trim()) return setError('Please specify your device model name.');
    if (!formData.problemDescription.trim()) return setError('Please write a brief description of the problem.');
    if (formData.preferredService === 'Request pickup' && !pickupAddress.trim()) {
      return setError('Please enter your pickup address.');
    }

    // Success state
    setIsSubmitted(true);
    if (onSuccess) onSuccess();
  };

  const getBallaaChatPayload = () => {
    const pickupDetail = formData.preferredService === 'Request pickup' 
      ? `Pickup: ${pickupAddress}` 
      : `Drop off: Norwich Union, 5th Floor, Suite 4, Nairobi`;

    return {
      customer: formData.name,
      phone: formData.phoneNumber,
      device: `${formData.deviceBrand} - ${formData.deviceModel}`,
      issue: formData.problemDescription,
      service: formData.preferredService,
      pickupAddress: pickupAddress || undefined
    };
  };

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-8" id="request-repair-view">
      
      {!isSubmitted ? (
        <div className="bg-white rounded-3xl border border-slate-150 p-6 sm:p-10 shadow-sm space-y-8" id="repair-form-container">
          
          {/* Form Header */}
          <div className="text-center space-y-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand-dark mx-auto">
              <Wrench className="h-6 w-6" />
            </div>
            <span className="text-xs font-bold text-brand-dark uppercase tracking-wider block">Express Nairobi CBD Fixes</span>
            <h1 className="font-display text-2xl font-black text-slate-900 tracking-tight sm:text-3xl">
              Book a Repair Appointment
            </h1>
<p className="text-sm text-slate-500 max-w-md mx-auto">
               Fill out the details below. Once submitted, send your details via BALLAA Chat to lock in parts and slot times immediately.
             </p>
          </div>

          {/* Validation Alert */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 text-xs flex items-center gap-2">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Form body */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Customer Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-dark focus:bg-white transition-colors font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 0712 345 678"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-dark focus:bg-white transition-colors font-medium"
                />
              </div>
            </div>

            {/* Device Brand & Model */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Device Brand *
                </label>
                <select
                  value={formData.deviceBrand}
                  onChange={(e) => setFormData({ ...formData, deviceBrand: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-brand-dark focus:bg-white transition-colors cursor-pointer font-bold"
                >
                  <option value="">-- Choose Brand --</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Device Model *
                </label>
                <input
                  type="text"
                  placeholder="e.g. iPhone 15 Pro, Galaxy S24, Spark 20"
                  value={formData.deviceModel}
                  onChange={(e) => setFormData({ ...formData, deviceModel: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-dark focus:bg-white transition-colors font-medium"
                />
              </div>
            </div>

            {/* Problem Description */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Describe the Issue *
              </label>
              <textarea
                rows={3}
                placeholder="e.g. Rear camera shaking, cracked screen glass, device fell in water, battery draining quickly..."
                value={formData.problemDescription}
                onChange={(e) => setFormData({ ...formData, problemDescription: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-dark focus:bg-white transition-colors resize-none font-medium"
              ></textarea>
            </div>

            {/* Preferred Service Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Preferred Service *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, preferredService: 'Drop off at shop' })}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 text-center transition-all cursor-pointer ${
                    formData.preferredService === 'Drop off at shop'
                      ? 'border-brand bg-brand/5 text-slate-950 font-bold shadow-sm'
                      : 'border-slate-150 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  <span className="text-lg">🏪</span>
                  <div>
                    <p className="text-xs font-bold">Drop off at shop</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-medium leading-tight">Norwich Union 5th Floor</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, preferredService: 'Request pickup' })}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 text-center transition-all cursor-pointer ${
                    formData.preferredService === 'Request pickup'
                      ? 'border-brand bg-brand/5 text-slate-950 font-bold shadow-sm'
                      : 'border-slate-150 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  <span className="text-lg">🚚</span>
                  <div>
                    <p className="text-xs font-bold">Request pickup</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-medium leading-tight">Nairobi wide service</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Optional Pickup Address */}
            {formData.preferredService === 'Request pickup' && (
              <div className="animate-fadeIn">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Pickup &amp; Delivery Address *
                </label>
                <input
                  type="text"
                  placeholder="Enter full address, apartment, office or suite number"
                  value={pickupAddress}
                  onChange={(e) => setPickupAddress(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-dark focus:bg-white transition-colors font-medium"
                />
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand hover:bg-[#2DD8E5] text-slate-950 py-3.5 text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer shadow-brand/10"
              >
                <Send className="h-4 w-4 text-slate-950" />
                Confirm &amp; Create Booking Slip
              </button>
            </div>

          </form>

        </div>
      ) : (
        /* Success Screen Modal / Slate */
        <div className="bg-white rounded-3xl border border-slate-150 p-8 sm:p-12 shadow-xl text-center space-y-6" id="repair-success-screen">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mx-auto border border-emerald-100">
            <CheckCircle className="h-10 w-10" />
          </div>

          <div className="space-y-2">
            <h2 className="font-display text-2xl font-black text-slate-900">Booking Slip Created!</h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Your ticket details are ready. Click below to send your slip via BALLAA Chat for scheduling.
            </p>
          </div>

          {/* Form details summarized beautifully */}
          <div className="bg-slate-50 rounded-2xl p-5 text-left border border-slate-100 max-w-md mx-auto text-xs space-y-2.5">
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Appointment Summary</p>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              <span className="text-slate-500">Customer Name:</span>
              <span className="font-bold text-slate-900 text-right">{formData.name}</span>
              
              <span className="text-slate-500">Device Model:</span>
              <span className="font-bold text-slate-900 text-right font-mono">{formData.deviceBrand} {formData.deviceModel}</span>
              
              <span className="text-slate-500">Service Selection:</span>
              <span className="font-bold text-brand-dark text-right">{formData.preferredService}</span>

              {formData.preferredService === 'Request pickup' && (
                <>
                  <span className="text-slate-500">Address:</span>
                  <span className="font-bold text-slate-700 text-right truncate">{pickupAddress}</span>
                </>
              )}
            </div>
            <div className="pt-2 border-t border-slate-150 text-slate-600 italic">
              " {formData.problemDescription} "
            </div>
          </div>

          {/* Core Action: Transfer to BALLAA Chat */}
          <div className="space-y-3 pt-2 max-w-md mx-auto">
            <button
              onClick={() => {
                const event = new CustomEvent('ballaa_chat_message', { 
                  detail: { 
                    booking: getBallaaChatPayload()
                  } 
                });
                window.dispatchEvent(event);
              }}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 text-sm font-extrabold shadow-md shadow-blue-100 transition-all cursor-pointer"
            >
              <MessageCircle className="h-5 w-5" />
              Send Booking via BALLAA Chat
            </button>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  phoneNumber: '',
                  deviceBrand: '',
                  deviceModel: '',
                  problemDescription: '',
                  preferredService: 'Drop off at shop'
                });
                setPickupAddress('');
              }}
              className="text-xs text-slate-500 font-bold hover:text-slate-800 transition-colors cursor-pointer"
            >
              Book Another Repair
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
