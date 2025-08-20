import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { eventTypes, eventStatuses } from "@/config/events";
import { X } from "lucide-react";

interface EventFiltersProps {
  selectedType: string;
  selectedStatus: string;
  selectedTags: string[];
  allTags: string[];
  onTypeChange: (type: string) => void;
  onStatusChange: (status: string) => void;
  onTagToggle: (tag: string) => void;
  onClearFilters: () => void;
}

export function EventFilters({
  selectedType,
  selectedStatus,
  selectedTags,
  allTags,
  onTypeChange,
  onStatusChange,
  onTagToggle,
  onClearFilters,
}: EventFiltersProps) {
  const hasActiveFilters =
    selectedType !== "all" ||
    selectedStatus !== "all" ||
    selectedTags.length > 0;

  return (
    <div className="space-y-4 p-4 border border-border rounded-lg bg-muted/30">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="text-sm font-medium mb-2 block">Event Type</label>
          <Select value={selectedType} onValueChange={onTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              {eventTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <label className="text-sm font-medium mb-2 block">Status</label>
          <Select value={selectedStatus} onValueChange={onStatusChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              {eventStatuses.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {hasActiveFilters && (
          <div className="flex items-end">
            <Button
              variant="outline"
              size="sm"
              onClick={onClearFilters}
              className="whitespace-nowrap"
            >
              <X className="h-4 w-4 mr-1" />
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Tags</label>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary/80 transition-colors"
              onClick={() => onTagToggle(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <div>
          <p className="text-sm text-muted-foreground">
            Active filters:{" "}
            {selectedType !== "all" &&
              `Type: ${
                eventTypes.find((t) => t.value === selectedType)?.label
              }`}
            {selectedType !== "all" && selectedStatus !== "all" && ", "}
            {selectedStatus !== "all" &&
              `Status: ${
                eventStatuses.find((s) => s.value === selectedStatus)?.label
              }`}
            {(selectedType !== "all" || selectedStatus !== "all") &&
              selectedTags.length > 0 &&
              ", "}
            {selectedTags.length > 0 && `Tags: ${selectedTags.join(", ")}`}
          </p>
        </div>
      )}
    </div>
  );
}
