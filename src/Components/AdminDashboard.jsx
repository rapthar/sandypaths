import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { PlusCircle, Search, Home, FileText, Tag, Droplet, Settings, Umbrella, MapPin, Building, Map, BarChart, ChevronDown, Wave, Water, Waves, Palmtree, Users, Clock, ArrowUpDown } from 'lucide-react'

const waterBodyTypes = [
  { name: "Beaches", icon: Palmtree },
  { name: "Lakes", icon: Water },
  { name: "Rivers", icon: Waves },
  { name: "Bays", icon: Wave },
  { name: "Lagoons", icon: Droplet },
  { name: "Estuaries", icon: Wave },
  { name: "Coves", icon: Water },
  { name: "Sand bars", icon: Wave }
]

const subOptions = [
  "All", "Add New", "Types", "Categories", "Amenities", "Cities/Towns", "Neighborhoods", "States"
]

export default function SandyPathsDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [expandedType, setExpandedType] = useState<string | null>(null)

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />
      case 'analytics':
        return <AnalyticsContent />
      case 'settings':
        return <SettingsContent />
      default:
        return <WaterBodyContent type={activeTab} />
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-blue-600 flex items-center">
            <Umbrella className="mr-2 h-6 w-6" />
            Sandy Paths
          </h1>
        </div>
        <nav className="mt-4">
          <a href="#" onClick={() => setActiveTab('dashboard')} className={`flex items-center py-2 px-4 text-gray-700 hover:bg-blue-100 ${activeTab === 'dashboard' ? 'bg-blue-100' : ''}`}>
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </a>
          {waterBodyTypes.map(type => (
            <Collapsible key={type.name} open={expandedType === type.name} onOpenChange={() => setExpandedType(expandedType === type.name ? null : type.name)}>
              <CollapsibleTrigger className="w-full">
                <a href="#" onClick={() => setActiveTab(type.name.toLowerCase())} className={`flex items-center justify-between py-2 px-4 text-gray-700 hover:bg-blue-100 ${activeTab === type.name.toLowerCase() ? 'bg-blue-100' : ''}`}>
                  <span className="flex items-center">
                    <type.icon className="mr-2 h-4 w-4" />
                    {type.name}
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${expandedType === type.name ? 'transform rotate-180' : ''}`} />
                </a>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-8 pr-4 py-2 space-y-2">
                  {subOptions.map(option => (
                    <a key={option} href="#" className="block text-sm text-gray-600 hover:text-blue-600">
                      {option.replace('[Place Type]', type.name.slice(0, -1))}
                    </a>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
          <a href="#" onClick={() => setActiveTab('analytics')} className={`flex items-center py-2 px-4 text-gray-700 hover:bg-blue-100 ${activeTab === 'analytics' ? 'bg-blue-100' : ''}`}>
            <BarChart className="mr-2 h-4 w-4" />
            Analytics
          </a>
          <a href="#" onClick={() => setActiveTab('settings')} className={`flex items-center py-2 px-4 text-gray-700 hover:bg-blue-100 ${activeTab === 'settings' ? 'bg-blue-100' : ''}`}>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center">
              <Umbrella className="mr-2 h-8 w-8 text-blue-600" />
              Sandy Paths Dashboard
            </h2>
          </header>

          {renderContent()}
        </div>
      </main>
    </div>
  )
}

function DashboardContent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Sandy Paths CMS</CardTitle>
        <CardDescription>Manage your water body listings from one central location.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {waterBodyTypes.map(type => (
            <Card key={type.name}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{type.name}</CardTitle>
                <type.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">Total {type.name.toLowerCase()} listed</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function WaterBodyContent({ type }: { type: string }) {
  const typeInfo = waterBodyTypes.find(t => t.name.toLowerCase() === type)
  const Icon = typeInfo?.icon || Droplet

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Icon className="mr-2 h-5 w-5" />
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </CardTitle>
        <CardDescription>Manage {type.toLowerCase()} listings here.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input className="pl-8 w-64" placeholder={`Search ${type.toLowerCase()}...`} />
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Add New {type.slice(0, -1)}
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {subOptions.map(option => (
            <Card key={option}>
              <CardHeader>
                <CardTitle className="text-sm">{option.replace('[Place Type]', type.slice(0, -1))}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Manage {option.toLowerCase()} for {type.toLowerCase()}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function AnalyticsContent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <BarChart className="mr-2 h-5 w-5" />
          Analytics
        </CardTitle>
        <CardDescription>View and manage your site analytics.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="analytics-id">Google Analytics ID</Label>
            <Input id="analytics-id" placeholder="UA-XXXXXXXXX-X" />
          </div>
          <Button>Save Analytics Settings</Button>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Analytics Overview</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Page Views</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45,231</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">20,513</div>
                <p className="text-xs text-muted-foreground">+10.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Time on Site</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2m 35s</div>
                <p className="text-xs text-muted-foreground">-0.3% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
                <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42.3%</div>
                <p className="text-xs text-muted-foreground">-2.1% from last month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function SettingsContent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Settings className="mr-2 h-5 w-5" />
          Settings
        </CardTitle>
        <CardDescription>Manage your Sandy Paths CMS settings.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <Label htmlFor="site-name">Site Name</Label>
            <Input id="site-name" defaultValue="Sandy Paths" />
          </div>
          <div>
            <Label htmlFor="site-description">Site Description</Label>
            <Input id="site-description" placeholder="Enter your site description..." />
          </div>
          <Button type="submit">Save Settings</Button>
        </form>
      </CardContent>
    </Card>
  )
}