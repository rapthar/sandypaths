import React, { useState } from 'react'
import { PlusCircle, Search, Home, FileText, Tag, Droplet, Settings, Umbrella, MapPin, Building, Map, BarChart, ChevronDown, Waves, Palmtree, Users, Clock, ArrowUpDown } from 'lucide-react'
import { palmtree-island-sun, droplets, waves, ship, fish, anchor, mountain, umbrella } from 'lucide-react';

const waterBodyTypes = [
  { name: "Beaches", icon: palmtree-island-sun },
  { name: "Lakes", icon: droplets },
  { name: "Rivers", icon: waves },
  { name: "Bays", icon: ship },
  { name: "Lagoons", icon: fish },
  { name: "Estuaries", icon: anchor },
  { name: "Coves", icon: mountain },
  { name: "Sand bars", icon: umbrella }
];

const subOptions = [
  "All", "Add New", "Types", "Categories", "Amenities", "Cities/Towns", "Neighborhoods", "States"
]

export default function SandyPathsDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [expandedType, setExpandedType] = useState(null)

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
            <div key={type.name}>
              <a href="#" onClick={() => {
                setActiveTab(type.name.toLowerCase())
                setExpandedType(expandedType === type.name ? null : type.name)
              }} className={`flex items-center justify-between py-2 px-4 text-gray-700 hover:bg-blue-100 ${activeTab === type.name.toLowerCase() ? 'bg-blue-100' : ''}`}>
                <span className="flex items-center">
                  <type.icon className="mr-2 h-4 w-4" />
                  {type.name}
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedType === type.name ? 'transform rotate-180' : ''}`} />
              </a>
              {expandedType === type.name && (
                <div className="pl-8 pr-4 py-2 space-y-2">
                  {subOptions.map(option => (
                    <a key={option} href="#" className="block text-sm text-gray-600 hover:text-blue-600">
                      {option.replace('[Place Type]', type.name.slice(0, -1))}
                    </a>
                  ))}
                </div>
              )}
            </div>
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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Welcome to Sandy Paths CMS</h3>
      <p className="text-gray-600 mb-6">Manage your water body listings from one central location.</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {waterBodyTypes.map(type => (
          <div key={type.name} className="bg-gray-50 p-4 rounded-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">{type.name}</span>
              <type.icon className="h-4 w-4 text-gray-400" />
            </div>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-gray-500">Total {type.name.toLowerCase()} listed</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function WaterBodyContent({ type }) {
  const typeInfo = waterBodyTypes.find(t => t.name.toLowerCase() === type)
  const Icon = typeInfo?.icon || Droplet

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Icon className="mr-2 h-5 w-5" />
        <h3 className="text-xl font-semibold">{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
      </div>
      <p className="text-gray-600 mb-6">Manage {type.toLowerCase()} listings here.</p>
      <div className="flex justify-between mb-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <input className="pl-8 w-64 p-2 border rounded" placeholder={`Search ${type.toLowerCase()}...`} />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
          <PlusCircle className="mr-2 h-4 w-4" /> Add New {type.slice(0, -1)}
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {subOptions.map(option => (
          <div key={option} className="bg-gray-50 p-4 rounded-md">
            <h4 className="text-sm font-semibold mb-2">{option.replace('[Place Type]', type.slice(0, -1))}</h4>
            <p className="text-xs text-gray-500">Manage {option.toLowerCase()} for {type.toLowerCase()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function AnalyticsContent() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <BarChart className="mr-2 h-5 w-5" />
        <h3 className="text-xl font-semibold">Analytics</h3>
      </div>
      <p className="text-gray-600 mb-6">View and manage your site analytics.</p>
      <div className="space-y-4 mb-8">
        <div>
          <label htmlFor="analytics-id" className="block text-sm font-medium text-gray-700 mb-1">Google Analytics ID</label>
          <input id="analytics-id" className="w-full p-2 border rounded" placeholder="UA-XXXXXXXXX-X" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Save Analytics Settings</button>
      </div>
      <h4 className="text-lg font-semibold mb-4">Analytics Overview</h4>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-gray-50 p-4 rounded-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Page Views</span>
            <BarChart className="h-4 w-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold">45,231</div>
          <p className="text-xs text-gray-500">+20.1% from last month</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Unique Visitors</span>
            <Users className="h-4 w-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold">20,513</div>
          <p className="text-xs text-gray-500">+10.5% from last month</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Avg. Time on Site</span>
            <Clock className="h-4 w-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold">2m 35s</div>
          <p className="text-xs text-gray-500">-0.3% from last month</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Bounce Rate</span>
            <ArrowUpDown className="h-4 w-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold">42.3%</div>
          <p className="text-xs text-gray-500">-2.1% from last month</p>
        </div>
      </div>
    </div>
  )
}

function SettingsContent() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Settings className="mr-2 h-5 w-5" />
        <h3 className="text-xl font-semibold">Settings</h3>
      </div>
      <p className="text-gray-600 mb-6">Manage your Sandy Paths CMS settings.</p>
      <form className="space-y-4">
        <div>
          <label htmlFor="site-name" className="block text-sm font-medium text-gray-700 mb-1">Site Name</label>
          <input id="site-name" className="w-full p-2 border rounded" defaultValue="Sandy Paths" />
        </div>
        <div>
          <label htmlFor="site-description" className="block text-sm font-medium text-gray-700 mb-1">Site Description</label>
          <input id="site-description" className="w-full p-2 border rounded" placeholder="Enter your site description..." />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save Settings</button>
      </form>
    </div>
  )
}