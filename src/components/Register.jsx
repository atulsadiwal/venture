import { Checkbox, Field, Input, Label } from '@headlessui/react'
import { clsx } from 'clsx'
import { Link } from 'react-router-dom'
import { GradientBackground } from './gradient'
import { Mark } from './logo'
import { Button } from './button'
import { CheckIcon } from '@heroicons/react/16/solid'

export default function Register() {
  return (
    <main className="overflow-hidden bg-gray-50">
      <GradientBackground />
      <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
          <form action="#" method="POST" className="p-7 sm:p-11">
            <div className="flex items-start">
              <Link href="/" title="Home">
                <Mark className="h-9 fill-black" />
              </Link>
            </div>
            <h1 className="mt-8 text-base/6 font-poppinsMedium">Create an Account</h1>
            <p className="mt-1 text-xs/5 text-gray-600 font-poppinsLight">
              Register to get started with your account.
            </p>
            <Field className="mt-5 space-y-2">
              <Label className="text-sm/5 font-poppinsRegular">Name</Label>
              <Input
                required
                autoFocus
                type="text"
                name="name"
                placeholder="Enter your full name"
                className={clsx(
                  'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
                  'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
                  'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
                )}
              />
            </Field>
            <Field className="mt-5 space-y-2">
              <Label className="text-sm/5 font-poppinsRegular">Email</Label>
              <Input
                required
                type="email"
                name="email"
                placeholder="Enter your email"
                className={clsx(
                  'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
                  'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
                  'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
                )}
              />
            </Field>
            <Field className="mt-5 space-y-2">
              <Label className="text-sm/5 font-poppinsRegular">Mobile</Label>
              <Input
                required
                type="tel"
                name="mobile"
                placeholder="Enter your mobile number"
                className={clsx(
                  'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
                  'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
                  'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
                )}
              />
            </Field>
            <Field className="mt-5 space-y-2">
              <Label htmlFor='gender' className="text-sm/5 font-poppinsRegular">Gender</Label>
              <select
                id='gender'
                required
                name="gender"
                defaultValue="" // Set the default value for the select field
                className={clsx(
                  'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
                  'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
                  'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
                )}
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </Field>
            <div className="mt-8 flex items-center gap-3">
              <Field className="flex items-center gap-3">
                <Checkbox
                  name="remember-me"
                  className={clsx(
                    'group block size-4 rounded border border-transparent shadow ring-1 ring-black/10 focus:outline-none',
                    'data-[checked]:bg-black data-[checked]:ring-black',
                    'data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-black',
                  )}
                >
                  <CheckIcon className="fill-white opacity-0 group-data-[checked]:opacity-100" />
                </Checkbox>
                <Label className="font-poppinsRegular text-sm">I agree to the terms and conditions</Label>
              </Field>
            </div>
            <div className="mt-5">
              <Button type="submit" className="w-full font-poppinsMedium">
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
