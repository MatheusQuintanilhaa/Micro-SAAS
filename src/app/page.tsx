import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import {
  Users,
  BarChart3,
  MessageSquare,
  Calendar,
  Mail,
  CheckCircle2,
  ArrowRight,
  Menu,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="hidden sm:inline-block">CRMify</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="#features"
              className="hover:text-foreground/80 text-sm font-medium transition-colors"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="hover:text-foreground/80 text-sm font-medium transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="hover:text-foreground/80 text-sm font-medium transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="hover:text-foreground/80 text-sm font-medium transition-colors"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              Log in
            </Link>
            <Button asChild>
              <Link href="#">Get Started</Link>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Simplify Customer Relationships
                  </h1>
                  <p className="text-muted-foreground max-w-[600px] md:text-xl">
                    The all-in-one CRM solution designed for growing businesses.
                    Manage contacts, track interactions, and close more deals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#">Start Free Trial</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#">
                      Book a Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>14-day free trial</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-background relative aspect-video w-full overflow-hidden rounded-xl border shadow-xl">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="CRM Dashboard Preview"
                    width={1280}
                    height={720}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="bg-muted/40 w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="bg-muted inline-block rounded-lg px-3 py-1 text-sm">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to manage customer relationships
                </h2>
                <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides all the tools you need to track,
                  nurture, and grow your customer relationships.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-muted flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Contact Management</h3>
                    <p className="text-muted-foreground">
                      Organize and manage all your contacts in one place with
                      detailed profiles and interaction history.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-muted flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Sales Analytics</h3>
                    <p className="text-muted-foreground">
                      Track your sales pipeline with real-time analytics and
                      customizable reports.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-muted flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Communication Tools</h3>
                    <p className="text-muted-foreground">
                      Integrated email, chat, and call tracking to keep all your
                      customer communications in one place.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-muted flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Task Management</h3>
                    <p className="text-muted-foreground">
                      Never miss a follow-up with integrated task management and
                      automated reminders.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-muted flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Email Campaigns</h3>
                    <p className="text-muted-foreground">
                      Create and send personalized email campaigns to nurture
                      leads and engage customers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-muted flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Deal Tracking</h3>
                    <p className="text-muted-foreground">
                      Track deals from lead to close with customizable sales
                      pipelines and stages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                width={1280}
                height={720}
                alt="Product screenshot"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="bg-muted inline-block rounded-lg px-3 py-1 text-sm">
                    Seamless Experience
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Designed for productivity
                  </h2>
                  <p className="text-muted-foreground max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our intuitive interface helps you work faster and smarter.
                    Spend less time managing your CRM and more time building
                    relationships.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span>Intuitive drag-and-drop interface</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span>Customizable dashboards and reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span>Mobile apps for iOS and Android</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span>Integrations with tools you already use</span>
                  </li>
                </ul>
                <div>
                  <Button size="lg" asChild>
                    <Link href="#">See it in action</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="bg-muted/40 w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="bg-muted inline-block rounded-lg px-3 py-1 text-sm">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Trusted by businesses of all sizes
                </h2>
                <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don&apos;t just take our word for it. See what our customers
                  have to say.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="bg-background flex flex-col justify-between gap-4 rounded-xl border p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-lg">
                    &quot;This CRM has transformed how we manage our customer
                    relationships. The interface is intuitive and the automation
                    features save us hours every week.&quot;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-muted h-10 w-10 rounded-full"></div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-muted-foreground text-sm">
                      CEO, TechStart Inc.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-background flex flex-col justify-between gap-4 rounded-xl border p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-lg">
                    &quot;We&apos;ve tried several CRM solutions, but this one
                    stands out for its simplicity and powerful features. Our
                    sales team loves it.&quot;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-muted h-10 w-10 rounded-full"></div>
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-muted-foreground text-sm">
                      Sales Director, Growth Partners
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-background flex flex-col justify-between gap-4 rounded-xl border p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-lg">
                    &quot;The analytics and reporting features have given us
                    insights we never had before. We can now make data-driven
                    decisions about our customer engagement. &quot;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-muted h-10 w-10 rounded-full"></div>
                  <div>
                    <p className="font-medium">Emily Rodriguez</p>
                    <p className="text-muted-foreground text-sm">
                      Marketing Manager, Bright Solutions
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-background flex flex-col justify-between gap-4 rounded-xl border p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-lg">
                    &quot;As a small business, we needed something affordable
                    but powerful. This CRM delivers exactly what we need without
                    breaking the bank. &quot;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-muted h-10 w-10 rounded-full"></div>
                  <div>
                    <p className="font-medium">David Wilson</p>
                    <p className="text-muted-foreground text-sm">
                      Owner, Wilson Consulting
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="bg-muted inline-block rounded-lg px-3 py-1 text-sm">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Simple, transparent pricing
                </h2>
                <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that&apos;s right for your business. All plans
                  include a 14-day free trial.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="bg-background flex flex-col rounded-xl border p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <p className="text-muted-foreground">
                    Perfect for small businesses and startups
                  </p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-4 w-4" />
                    <span>Up to 1,000 contacts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-4 w-4" />
                    <span>Basic email campaigns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-4 w-4" />
                    <span>Sales pipeline management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-4 w-4" />
                    <span>Mobile app access</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full" variant="outline">
                    Start Free Trial
                  </Button>
                </div>
              </div>
              <div className="bg-background relative flex flex-col rounded-xl border p-6 shadow-sm">
                <div className="bg-primary text-primary-foreground absolute -top-4 right-0 left-0 mx-auto w-fit rounded-full px-3 py-1 text-xs font-medium">
                  Most Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Professional</h3>
                  <p className="text-muted-foreground">
                    For growing teams and businesses
                  </p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-4 w-4" />
                    <span>Up to 10,000 contacts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-4 w-4" />
                    <span>Advanced email campaigns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-4 w-4" />
                    <span>Custom sales pipelines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-4 w-4" />
                    <span>Automation workflows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-4 w-4" />
                    <span>API access</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full">Start Free Trial</Button>
                </div>
              </div>
              <div className="bg-background flex flex-col rounded-xl border p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-muted-foreground">
                    For large organizations with complex needs
                  </p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$199</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-4 w-4" />
                    <span>Unlimited contacts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-4 w-4" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-4 w-4" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-4 w-4" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-4 w-4" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full" variant="outline">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="bg-muted/40 w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="bg-muted inline-block rounded-lg px-3 py-1 text-sm">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Frequently asked questions
                </h2>
                <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to know about our CRM solution.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              <div className="bg-background rounded-lg border p-6">
                <h3 className="text-lg font-bold">
                  How long is the free trial?
                </h3>
                <p className="text-muted-foreground mt-2">
                  Our free trial lasts for 14 days. You&apos;ll have full access
                  to all features during this period with no credit card
                  required.
                </p>
              </div>
              <div className="bg-background rounded-lg border p-6">
                <h3 className="text-lg font-bold">
                  Can I export my data if I decide to switch?
                </h3>
                <p className="text-muted-foreground mt-2">
                  Yes, you can export all your data at any time in standard
                  formats like CSV or Excel.
                </p>
              </div>
              <div className="bg-background rounded-lg border p-6">
                <h3 className="text-lg font-bold">
                  Do you offer discounts for annual billing?
                </h3>
                <p className="text-muted-foreground mt-2">
                  Yes, you can save 20% by choosing annual billing on any of our
                  plans.
                </p>
              </div>
              <div className="bg-background rounded-lg border p-6">
                <h3 className="text-lg font-bold">
                  What kind of support do you offer?
                </h3>
                <p className="text-muted-foreground mt-2">
                  We offer email support for all plans, with live chat for
                  Professional and Enterprise plans. Enterprise customers also
                  receive dedicated account management.
                </p>
              </div>
              <div className="bg-background rounded-lg border p-6">
                <h3 className="text-lg font-bold">
                  Can I integrate with my existing tools?
                </h3>
                <p className="text-muted-foreground mt-2">
                  Yes, we offer integrations with popular tools like Gmail,
                  Outlook, Slack, Zapier, and many more. Custom integrations are
                  available on the Enterprise plan.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to transform your customer relationships?
              </h2>
              <p className="text-muted-foreground max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start your 14-day free trial today. No credit card required.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Button size="lg" asChild>
                <Link href="#">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-muted/40 w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Stay updated
                </h2>
                <p className="text-muted-foreground max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter for product updates, tips, and
                  insights.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2 sm:flex-row">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-muted-foreground text-xs">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-background w-full border-t">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:flex-row lg:gap-12">
          <div className="flex flex-col gap-4 lg:w-1/3">
            <div className="flex items-center gap-2 text-xl font-bold">
              <span>CRMify</span>
            </div>
            <p className="text-muted-foreground">
              Simplify customer relationships and grow your business with our
              all-in-one CRM solution.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="container flex flex-col gap-2 px-4 py-6 text-center md:flex-row md:justify-between md:px-6">
            <p className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()} CRMify. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs">
              Crafted with care for growing businesses.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
