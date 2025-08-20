"use client";

import { AnimatedTitle } from "@/components/ui/animated-sections";
import { events } from "@/config/events";
import { EventCard } from "@/components/ui/event-card";

export default function EventsPage() {
  return (
    <main className="">
      <AnimatedTitle
        title="EVENTS"
        description="We host a dynamic range of events, workshops, and talks designed to
        inspire and empower students. Our events aim to foster innovation and
        skill development in finance, technology, and beyond."
      />

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Completed Events */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* No upcoming events message */}
        <div className="text-center py-12 bg-muted/30 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">No Upcoming Events</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            There are currently no upcoming events scheduled. Stay tuned by
            following our social media channels to get notified about future
            events, workshops, and networking opportunities.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/#contact"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
